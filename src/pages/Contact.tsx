import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "kymetrainnovations@hotmail.com",
    description: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "08035932192",
    description: "Mon-Fri from 9am to 6pm",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "No 2 Mani Road by WTC roundabout, Katsina, Katsina State",
    description: "Schedule an appointment",
  },
];

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

type ContactFormPanelProps = {
  onSendAnother: () => void;
};

const ContactFormPanel = ({ onSendAnother }: ContactFormPanelProps) => {
  const { toast } = useToast();
  const [state, handleFormspreeSubmit] = useForm("xykzlkvg");

  const [showSuccess, setShowSuccess] = useState(false);
  const [hasHandledSuccess, setHasHandledSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (state.succeeded && !hasHandledSuccess) {
      setHasHandledSuccess(true);
      setShowSuccess(true);

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    }
  }, [state.succeeded, hasHandledSuccess, toast]);

  useEffect(() => {
    if (state.errors && Object.keys(state.errors).length > 0) {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  }, [state.errors, toast]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (formData.name.trim().length > 100) {
      newErrors.name = "Name must be less than 100 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    } else if (formData.email.trim().length > 255) {
      newErrors.email = "Email must be less than 255 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = "Message must be less than 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form",
        variant: "destructive",
      });
      return;
    }

    await handleFormspreeSubmit(e);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
        Send Us a Message
      </h2>
      <p className="text-muted-foreground mb-8">
        Fill out the form below and we'll get back to you shortly.
      </p>

      {showSuccess ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">
            Message Sent Successfully!
          </h3>
          <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
          <Button variant="outline" className="mt-4" onClick={onSendAnother}>
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Your Name *
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={`h-12 ${errors.name ? "border-destructive" : ""}`}
              />
              {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Email Address *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@company.com"
                className={`h-12 ${errors.email ? "border-destructive" : ""}`}
              />
              {errors.email && (
                <p className="text-sm text-destructive mt-1">{errors.email}</p>
              )}
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Company Name
              </label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company"
                className="h-12"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select a service</option>
                <option value="multimedia">Multimedia Services</option>
                <option value="software">Software Development</option>
                <option value="engineering">Engineering Services</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Your Message *
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows={6}
              className={`resize-none ${errors.message ? "border-destructive" : ""}`}
            />
            {errors.message && (
              <p className="text-sm text-destructive mt-1">{errors.message}</p>
            )}
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <Button
            type="submit"
            variant="hero"
            size="xl"
            className="w-full"
            disabled={state.submitting}
          >
            {state.submitting ? (
              <>
                <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="w-5 h-5 ml-1" />
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
};

const Contact = () => {
  const [formInstance, setFormInstance] = useState(0);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Contact Us
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Let's Build Something Amazing Together
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to start your next project? Get in touch with us and let's discuss how
              we can help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-card rounded-2xl border border-border p-6 text-center card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{info.title}</h3>
                <p className="text-foreground font-medium mb-1">{info.details}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <ContactFormPanel
              key={formInstance}
              onSendAnother={() => setFormInstance((v) => v + 1)}
            />

            {/* Side Content */}
            <div className="space-y-8">
              {/* Why Contact Us */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Why Work With Us?</h3>
                <div className="space-y-4">
                  {[
                    "Free initial consultation to understand your needs",
                    "Tailored solutions designed for your specific goals",
                    "Transparent pricing with no hidden costs",
                    "Ongoing support and maintenance",
                    "Quick turnaround without compromising quality",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-primary/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-primary" />
                  <h4 className="font-bold text-foreground">Quick Response</h4>
                </div>
                <p className="text-muted-foreground">
                  We typically respond to all inquiries within 24 hours during business
                  days. For urgent matters, please call us directly.
                </p>
              </div>

              {/* Office Hours */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <h4 className="font-bold text-foreground mb-4">Office Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
