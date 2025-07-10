@@ .. @@
 const Testimonials = () => {
-  const [testimonials, setTestimonials] = useState([
+  const testimonials = [
     {
       id: 1,
       name: "Sarah Johnson",
       company: "TechStart Inc.",
       role: "CEO",
       content:
         "DigitalPro transformed our online presence completely. Their AI-driven approach increased our leads by 300% in just 6 months.",
       rating: 5,
       image: "/placeholder.svg?height=80&width=80&text=SJ",
     },
     {
       id: 2,
       name: "Michael Chen",
       company: "E-Commerce Plus",
       role: "Marketing Director",
       content:
         "The ROI we've seen from their campaigns is incredible. Professional, data-driven, and results-focused team.",
       rating: 5,
       image: "/placeholder.svg?height=80&width=80&text=MC",
     },
     {
       id: 3,
       name: "Emily Rodriguez",
       company: "HealthTech Solutions",
       role: "Founder",
       content:
         "Their expertise in healthcare marketing is unmatched. They understand our industry and deliver targeted campaigns that work.",
       rating: 5,
       image: "/placeholder.svg?height=80&width=80&text=ER",
     },
     {
       id: 4,
       name: "David Kim",
       company: "StartupFlow",
       role: "Founder",
       content:
         "Amazing results! Our conversion rate doubled within 3 months. The team is professional and delivers on their promises.",
       rating: 5,
       image: "/placeholder.svg?height=80&width=80&text=DK",
     },
     {
       id: 5,
       name: "Lisa Wang",
       company: "GrowthLab",
       role: "CMO",
       content:
         "Best investment we made for our marketing. The AI-powered insights helped us understand our customers better.",
       rating: 5,
       image: "/placeholder.svg?height=80&width=80&text=LW",
     },
-  ])
-
-  const [dragPositions, setDragPositions] = useState(testimonials.map(() => ({ x: 0, y: 0 })))
+  ]