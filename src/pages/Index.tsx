
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Package, 
  Users, 
  BarChart3, 
  Shield, 
  Smartphone, 
  Zap, 
  CheckCircle,
  Star,
  Menu,
  X,
  ArrowRight,
  TrendingUp,
  Globe,
  Lock
} from "lucide-react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: Package,
      title: "Real-time Inventory Tracking",
      description: "Monitor stock levels live with automatic adjustments for incoming shipments and sales across all channels."
    },
    {
      icon: Users,
      title: "Vendor Management",
      description: "Maintain comprehensive supplier catalogs with contacts, contracts, and automated procurement workflows."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get actionable insights with demand forecasting, sales trends, and inventory turnover reports."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Multi-factor authentication, data encryption, and role-based access control protect your business data."
    },
    {
      icon: Smartphone,
      title: "Offline Mobile Access",
      description: "Barcode scanning and inventory updates work offline, syncing automatically when connected."
    },
    {
      icon: Globe,
      title: "Omnichannel Integration",
      description: "Seamlessly connect physical stores and online channels with real-time inventory synchronization."
    }
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 100 inventory items",
        "1 user account",
        "Basic reporting",
        "Mobile app access",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      period: "per user/month",
      description: "Advanced features for growing businesses",
      features: [
        "Unlimited inventory items",
        "Up to 10 users",
        "Advanced analytics",
        "Vendor management",
        "API integrations",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per user/month",
      description: "Full-featured solution for large organizations",
      features: [
        "Everything in Professional",
        "Unlimited users",
        "Multi-warehouse support",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="relative z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Package className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">InventoryPro</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
              <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
              <a href="#security" className="hover:text-blue-400 transition-colors">Security</a>
              <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                Sign In
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Get Started Free
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block hover:text-blue-400 transition-colors">Features</a>
              <a href="#pricing" className="block hover:text-blue-400 transition-colors">Pricing</a>
              <a href="#security" className="block hover:text-blue-400 transition-colors">Security</a>
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                  Sign In
                </Button>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Get Started Free
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="mb-4 bg-blue-600/20 text-blue-300 border-blue-500/30">
              Trusted by 10,000+ businesses worldwide
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Inventory & Vendor Management
              <span className="block">Made Simple</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Streamline your operations with our comprehensive SaaS platform. Track inventory in real-time, 
              manage vendors efficiently, and scale your business with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-slate-400 text-slate-300 hover:bg-slate-800 text-lg px-8 py-3">
                View Demo
              </Button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-slate-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">10M+</div>
              <div className="text-slate-300">Items Tracked Daily</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-slate-300">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Manage Your Business
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              From inventory tracking to vendor management, our platform provides all the tools 
              you need to streamline operations and boost profitability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-600/20 p-3 rounded-lg">
                      <feature.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <CardTitle className="text-white">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Start free and scale as you grow. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative bg-slate-900/50 border-slate-700 ${
                plan.popular ? 'border-blue-500 ring-2 ring-blue-500/20' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-2">{plan.period}</span>
                  </div>
                  <CardDescription className="text-slate-300 mt-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'bg-slate-700 hover:bg-slate-600'
                    }`}
                  >
                    {plan.name === 'Free' ? 'Get Started' : 'Start Free Trial'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Your data is protected with the highest security standards and compliance measures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Data Encryption</h3>
              <p className="text-slate-300 text-sm">End-to-end encryption for all data in transit and at rest</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">MFA Authentication</h3>
              <p className="text-slate-300 text-sm">Multi-factor authentication and role-based access control</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Regular Audits</h3>
              <p className="text-slate-300 text-sm">Continuous security monitoring and regular penetration testing</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Compliance</h3>
              <p className="text-slate-300 text-sm">GDPR, SOC 2, and industry standard compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join thousands of businesses that trust InventoryPro to manage their operations efficiently and securely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-400 text-slate-300 hover:bg-slate-800 text-lg px-8 py-3">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Package className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">InventoryPro</span>
              </div>
              <p className="text-slate-400">
                The complete inventory and vendor management solution for modern businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 InventoryPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
