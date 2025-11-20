export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Aarth Saarthi</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition">How It Works</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition">About</a>
            <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-white to-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                SEPTEMBER 2025
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Institutional-Grade
                <span className="text-gradient"> AI Trading</span>
                <br />for Retail Investors
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Empowering retail investors with hedge fund-grade capabilities through multi-agent AI architecture, combining expert analysis, trading strategies, and risk management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition text-lg font-medium">
                  Start Investing
                </button>
                <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-primary hover:text-primary transition text-lg font-medium">
                  Learn More
                </button>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>AI-Powered Analysis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Real-Time Insights</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">Portfolio Value</span>
                    <span className="text-green-500 text-sm font-medium">+12.4%</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">$1,876,580</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                    <div className="text-sm opacity-80 mb-1">AI Agents Active</div>
                    <div className="text-2xl font-bold">7</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                    <div className="text-sm opacity-80 mb-1">Success Rate</div>
                    <div className="text-2xl font-bold">94%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">THE CHALLENGE</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Retail Problem Statement
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            Our platform empowers retail investors with hedge fund-grade capabilities by leveraging a multi-agent AI architecture that simulates expert roles in analysis, trading, and risk management.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-secondary rounded-2xl p-8 text-left hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Limited Access</h3>
              <p className="text-gray-600">
                Retail investors lack access to institutional-grade analysis tools and hedge fund strategies that professionals use daily.
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-8 text-left hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Complex Analysis</h3>
              <p className="text-gray-600">
                Understanding market dynamics requires expertise in technical, fundamental, and sentiment analysis—beyond most retail capabilities.
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-8 text-left hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pump & Dump Schemes</h3>
              <p className="text-gray-600">
                Without proper analysis tools, retail investors often fall victim to market manipulation and fraudulent schemes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">OUR SOLUTION</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              AI-Powered Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience that grows with your scale through our advanced multi-agent AI system
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Agent AI Architecture</h3>
              <p className="text-gray-600">
                Dedicated AI agents emulate expert roles (analyst, trader, risk manager) found in hedge funds with separation of concerns.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fundamental & Technical Analysis</h3>
              <p className="text-gray-600">
                Dedicated modules support fully agentic analysis of company balance sheets, market trends, and technical indicators.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Recommendations</h3>
              <p className="text-gray-600">
                Tailored suggestions based on your profile, risk-taking abilities, budget, and investment goals.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sentiment Analysis</h3>
              <p className="text-gray-600">
                Extract sentiments about stocks through Twitter and Reddit APIs to help inform decision-making.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Natural Language Processing</h3>
              <p className="text-gray-600">
                Using MCP servers for effective tool calling and processing natural language inputs like "Should I buy Tesla this week?"
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Portfolio Rebalancing</h3>
              <p className="text-gray-600">
                Intelligent agents suggest portfolio rebalancing and proxy stocks to optimize returns and minimize risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-accent-navy text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Maximize your returns with intelligent AI analysis
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Three simple steps to institutional-grade investment intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Set Your Profile</h3>
              <p className="text-white/80">
                Input your age, budget, risk appetite, and current investments. Our AI learns your unique investment style.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Analysis</h3>
              <p className="text-white/80">
                Our multi-agent system analyzes market data, sentiment feeds, and global indicators to generate insights.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Get Recommendations</h3>
              <p className="text-white/80">
                Receive personalized buy/sell signals, portfolio rebalancing suggestions, and transparent explanations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">OUR IMPACT</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Why investors prefer Aarth Saarthi
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-6xl font-bold text-primary mb-4">7+</div>
              <p className="text-xl text-gray-900 font-semibold">AI Agents</p>
              <p className="text-gray-600 mt-2">Specialized agents working for you</p>
            </div>
            <div>
              <div className="text-6xl font-bold text-primary mb-4">24/7</div>
              <p className="text-xl text-gray-900 font-semibold">Market Monitoring</p>
              <p className="text-gray-600 mt-2">Continuous analysis and alerts</p>
            </div>
            <div>
              <div className="text-6xl font-bold text-primary mb-4">100%</div>
              <p className="text-xl text-gray-900 font-semibold">Transparency</p>
              <p className="text-gray-600 mt-2">Full explainability of decisions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="about" className="py-20 px-6 bg-secondary/50">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">THE TEAM</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            A Team Effort
          </h2>
          <p className="text-xl text-gray-600 mb-12">Built with passion by a dedicated team</p>

          <div className="flex flex-wrap justify-center gap-8">
            {['Tanish', 'Roshan', 'Viraj', 'Adarsht'].map((name) => (
              <div key={name} className="bg-white rounded-2xl p-8 w-48 hover:shadow-xl transition">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl text-white font-bold">{name[0]}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{name}</h3>
                <p className="text-sm text-gray-600 mt-1">Developer</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to level up your investment process?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of investors already using AI-powered analysis to make smarter decisions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition text-lg font-medium">
              Get Started Now
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition text-lg font-medium">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <span className="text-xl font-bold">Aarth Saarthi</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering retail investors with institutional-grade AI analysis.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">AI Agents</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Team</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Aarth Saarthi. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
