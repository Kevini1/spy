"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Scan,
  Lock,
  Unlock,
  AlertTriangle,
  CheckCircle,
  Star,
  Users,
  Award,
} from "lucide-react"

export default function SecureMobileScanner() {
  const [scanProgress, setScanProgress] = useState(0)
  const [isScanning, setIsScanning] = useState(false)
  const [scanComplete, setScanComplete] = useState(false)
  const [threatsDetected, setThreatsDetected] = useState(0)
  const [showContentLocker, setShowContentLocker] = useState(false)
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [email, setEmail] = useState("")
  const [rotateAngle, setRotateAngle] = useState(0)
  const [scanStep, setScanStep] = useState("")
  const [pulseIntensity, setPulseIntensity] = useState(0)
  const [radarAngle, setRadarAngle] = useState(0)
  const contentLockerRef = useRef<HTMLElement>(null)

  const threats = [
    "Malicious App: FakeBank.apk",
    "Suspicious Network: Public_WiFi_Hack",
    "Data Leak: Contact List Exposed",
    "Outdated Security: Android 8.1",
    "Tracking Cookie: ad-tracker.js",
  ]

  const scanSteps = [
    "Initializing security scan...",
    "Checking installed applications...",
    "Analyzing network connections...",
    "Scanning for malware signatures...",
    "Detecting privacy vulnerabilities...",
    "Checking system permissions...",
    "Analyzing data encryption...",
    "Verifying security certificates...",
    "Scanning for tracking cookies...",
    "Finalizing threat assessment...",
  ]

  useEffect(() => {
    if (isScanning) {
      let stepIndex = 0
      setScanStep(scanSteps[0])

      const interval = setInterval(() => {
        setScanProgress((prev) => {
          const newProgress = prev + Math.random() * 3 + 1.5

          const currentStepIndex = Math.floor((newProgress / 100) * scanSteps.length)
          if (currentStepIndex !== stepIndex && currentStepIndex < scanSteps.length) {
            stepIndex = currentStepIndex
            setScanStep(scanSteps[stepIndex])
          }

          if (newProgress >= 100) {
            clearInterval(interval)
            setScanComplete(true)
            setThreatsDetected(Math.floor(Math.random() * 8) + 3)
            setScanStep("Scan complete!")

            setTimeout(() => {
              setShowContentLocker(true)
              setTimeout(() => {
                contentLockerRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                })
              }, 100)
            }, 2000)
            return 100
          }
          return newProgress
        })
      }, 800)

      const rotateInterval = setInterval(() => {
        setRotateAngle((prev) => prev + 4)
      }, 80)

      const pulseInterval = setInterval(() => {
        setPulseIntensity((prev) => (prev + 0.1) % 1)
      }, 100)

      const radarInterval = setInterval(() => {
        setRadarAngle((prev) => (prev + 2) % 360)
      }, 50)

      return () => {
        clearInterval(interval)
        clearInterval(rotateInterval)
        clearInterval(pulseInterval)
        clearInterval(radarInterval)
      }
    }
  }, [isScanning])

  const startScan = () => {
    setIsScanning(true)
    setScanProgress(0)
    setScanComplete(false)
    setShowContentLocker(false)
    setIsUnlocked(false)
    setScanStep("")
  }

  const unlockResults = () => {
    //if (email) {
      //window.open("https://userunlock.com/cl/i/n627k9", "_blank")
      setIsUnlocked(true)
    //}
  }

  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-21KY3C928N`} // remplace par ton ID
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-21KY3C928N', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/5">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">SecureMobile Scanner</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#security" className="text-muted-foreground hover:text-foreground transition-colors">
              Security
            </a>
            <a href="#support" className="text-muted-foreground hover:text-foreground transition-colors">
              Support
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Protect Your Mobile Experience
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Advanced AI-powered security scanning detects threats, vulnerabilities, and privacy risks on your mobile
            device in real-time.
          </p>

          {/* Phone Scanning Animation */}
          <div className="relative mx-auto w-64 h-96 mb-8">
            <div
              className={`absolute inset-0 rounded-3xl transition-all duration-300 ${
                isScanning ? "shadow-2xl shadow-primary/30" : "shadow-2xl"
              }`}
              style={{
                boxShadow: isScanning
                  ? `0 0 ${20 + pulseIntensity * 40}px rgba(59, 130, 246, ${0.3 + pulseIntensity * 0.4})`
                  : undefined,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-card to-muted rounded-3xl border-8 border-primary/20">
                <div className="p-6 h-full flex flex-col items-center justify-center relative overflow-hidden">
                  <Smartphone className="h-16 w-16 text-primary mb-4" />

                  {isScanning && (
                    <>
                      <Scan
                        className="h-12 w-12 text-accent mb-4 transition-transform duration-75 ease-linear"
                        style={{ transform: `rotate(${rotateAngle}deg)` }}
                      />
                      <div className="w-full space-y-2">
                        <Progress value={scanProgress} className="h-2 transition-all duration-300 ease-out" />
                        <p className="text-sm text-muted-foreground transition-all duration-200">
                          Scanning... {Math.round(scanProgress)}%
                        </p>
                        <p className="text-xs text-muted-foreground/80 h-8 flex items-center justify-center text-center transition-all duration-500 ease-in-out">
                          {scanStep}
                        </p>
                      </div>

                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: `conic-gradient(from ${radarAngle}deg, transparent 0deg, rgba(59, 130, 246, 0.1) 30deg, transparent 60deg)`,
                          borderRadius: "1.5rem",
                        }}
                      />

                      <div className="absolute inset-0 pointer-events-none">
                        <div
                          className="absolute inset-4 border border-primary/20 rounded-2xl transition-all duration-1000 ease-out"
                          style={{
                            transform: `scale(${1 + pulseIntensity * 0.1})`,
                            opacity: 1 - pulseIntensity,
                          }}
                        />
                        <div
                          className="absolute inset-8 border border-accent/30 rounded-xl transition-all duration-800 ease-out"
                          style={{
                            transform: `scale(${1 + pulseIntensity * 0.15})`,
                            opacity: 0.8 - pulseIntensity,
                          }}
                        />
                      </div>
                    </>
                  )}

                  {scanComplete && (
                    <div className="text-center animate-in fade-in duration-500">
                      <ShieldAlert className="h-16 w-16 text-destructive mx-auto mb-4 animate-bounce" />
                      <div className="text-2xl font-bold text-destructive mb-2">
                        {threatsDetected} Threats Detected!
                      </div>
                      <p className="text-sm text-muted-foreground">Your device needs immediate protection</p>
                    </div>
                  )}

                  {!isScanning && !scanComplete && (
                    <div className="text-center">
                      <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">Ready to scan your device</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {!isScanning && !scanComplete && (
            <Button
              onClick={startScan}
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground mb-8"
            >
              <Scan className="h-5 w-5 mr-2" />
              Start Security Scan
            </Button>
          )}

          {showContentLocker && !isUnlocked && (
            <section ref={contentLockerRef} className="container mx-auto px-4 py-16">
              <Card className="max-w-md mx-auto border-destructive/20 bg-destructive/5">
                <CardHeader className="text-center">
                  <Lock className="h-12 w-12 text-destructive mx-auto mb-4" />
                  <CardTitle className="text-destructive">Security Report Locked</CardTitle>
                  <CardDescription>
                    Enter your email to unlock your detailed security analysis and protection recommendations.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <Button
                    onClick={unlockResults}
                    className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                    disabled={!email}
                  >
                    <Unlock className="h-4 w-4 mr-2" />
                    Unlock Security Report
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    We respect your privacy. No spam, unsubscribe anytime.
                  </p>
                </CardContent>
              </Card>
            </section>
          )}

          {isUnlocked && (
            <section className="container mx-auto px-4 py-16">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Your Security Analysis</h2>
                  <p className="text-muted-foreground">Here's what we found and how to protect your device</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {/* Threats Detected */}
                  <Card className="border-destructive/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-destructive">
                        <AlertTriangle className="h-5 w-5" />
                        Threats Detected ({threatsDetected})
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {threats.slice(0, threatsDetected).map((threat, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-destructive/5 rounded-lg animate-in slide-in-from-left duration-300"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <ShieldAlert className="h-4 w-4 text-destructive flex-shrink-0" />
                          <span className="text-sm">{threat}</span>
                          <Badge variant="destructive" className="ml-auto">
                            High Risk
                          </Badge>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Protection Status */}
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-primary">
                        <ShieldCheck className="h-5 w-5" />
                        Protection Recommendations
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Enable real-time protection</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Update security patches</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Remove malicious apps</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Secure network connections</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                  <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-4">Secure Your Phone Now</h3>
                      <p className="text-muted-foreground mb-6">
                        Don't let these threats compromise your privacy and security. Get full protection in just one
                        click.
                      </p>
                      <Button
                        size="lg"
                        className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        Download Free Protection
                      </Button>
                      <p className="text-sm text-muted-foreground mt-4">
                        ✓ 30-day free trial ✓ No credit card required ✓ Instant protection
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
          )}

          {/* Trust Section */}
          <section className="bg-muted/30 py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Trusted by Millions</h2>
                <p className="text-muted-foreground">Join over 10 million users who trust SecureMobile Scanner</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">10M+</h3>
                    <p className="text-muted-foreground">Active Users</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Star className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">4.8/5</h3>
                    <p className="text-muted-foreground">App Store Rating</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">Award</h3>
                    <p className="text-muted-foreground">Best Security App 2024</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-card border-t border-border">
            <div className="container mx-auto px-4 py-8">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                  <span className="font-bold text-foreground">SecureMobile Scanner</span>
                </div>

                <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                  <span>•</span>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                  <span>•</span>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact Us
                  </a>
                </div>

                <p className="text-xs text-muted-foreground">© 2024 SecureMobile Scanner. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </div>
  )
}
