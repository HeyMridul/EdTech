import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Trophy, Calendar } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Excellence in Education for Grades 5-10
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Expert tutoring, personalized attention, and proven results. Join us to excel in your academic journey.
              </p>
            </div>
            <div className="space-x-4">
              <Button size="lg" asChild>
                <Link href="/courses">Explore Courses</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <BookOpen className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Expert Teachers</h3>
                <p className="text-gray-500">Experienced educators dedicated to student success</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Small Batch Size</h3>
                <p className="text-gray-500">Personalized attention in small groups</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <Trophy className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Proven Results</h3>
                <p className="text-gray-500">Consistent academic improvement</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <Calendar className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Flexible Schedule</h3>
                <p className="text-gray-500">Convenient timing options</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

