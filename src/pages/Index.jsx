import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bitcoin, ShieldCheck, Users, DollarSign } from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Crypto SaaS</h1>
        <p className="text-xl mb-8">Revolutionizing the way you manage your crypto assets</p>
        <Button size="lg" className="bg-white text-blue-500">Get Started</Button>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Bitcoin className="h-12 w-12 text-blue-500" />}
            title="Secure Transactions"
            description="Experience the highest level of security for all your transactions."
          />
          <FeatureCard
            icon={<ShieldCheck className="h-12 w-12 text-blue-500" />}
            title="Robust Security"
            description="Your assets are protected with our state-of-the-art security measures."
          />
          <FeatureCard
            icon={<Users className="h-12 w-12 text-blue-500" />}
            title="User Management"
            description="Easily manage multiple users and permissions."
          />
          <FeatureCard
            icon={<DollarSign className="h-12 w-12 text-blue-500" />}
            title="Affordable Pricing"
            description="Get the best value for your money with our competitive pricing plans."
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            name="John Doe"
            feedback="Crypto SaaS has completely transformed the way I manage my crypto assets. Highly recommended!"
            image="/images/user1.jpg"
          />
          <TestimonialCard
            name="Jane Smith"
            feedback="The security features are top-notch. I feel safe knowing my assets are protected."
            image="/images/user2.jpg"
          />
          <TestimonialCard
            name="Sam Wilson"
            feedback="The user management system is a game-changer. It's so easy to use!"
            image="/images/user3.jpg"
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            title="Basic"
            price="$9.99/month"
            features={["Feature 1", "Feature 2", "Feature 3"]}
          />
          <PricingCard
            title="Pro"
            price="$19.99/month"
            features={["Feature 1", "Feature 2", "Feature 3", "Feature 4"]}
          />
          <PricingCard
            title="Enterprise"
            price="$49.99/month"
            features={["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"]}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white text-center">
        <div className="space-y-4">
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-gray-400">Contact Us</a>
          </div>
          <div className="space-x-4">
            <a href="#" className="hover:text-gray-400">Facebook</a>
            <a href="#" className="hover:text-gray-400">Twitter</a>
            <a href="#" className="hover:text-gray-400">LinkedIn</a>
          </div>
          <p>&copy; 2023 Crypto SaaS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <Card className="text-center p-6">
    <CardHeader className="flex justify-center mb-4">{icon}</CardHeader>
    <CardTitle className="text-xl font-semibold mb-2">{title}</CardTitle>
    <CardContent>{description}</CardContent>
  </Card>
);

const TestimonialCard = ({ name, feedback, image }) => (
  <Card className="text-center p-6">
    <CardHeader className="flex justify-center mb-4">
      <img src={image} alt={name} className="h-16 w-16 rounded-full object-cover" />
    </CardHeader>
    <CardTitle className="text-xl font-semibold mb-2">{name}</CardTitle>
    <CardContent>{feedback}</CardContent>
  </Card>
);

const PricingCard = ({ title, price, features }) => (
  <Card className="text-center p-6">
    <CardHeader className="mb-4">
      <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      <p className="text-xl text-gray-500">{price}</p>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default Index;