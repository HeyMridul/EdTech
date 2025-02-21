import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function CoursesPage() {
  const courses = [
    {
      grade: "5th Grade",
      subjects: ["Mathematics", "Science", "English"],
      description: "Foundation building for primary education",
      price: "1500/month",
    },
    {
      grade: "6th Grade",
      subjects: ["Mathematics", "Science", "English", "Social Studies"],
      description: "Comprehensive middle school preparation",
      price: "1500/month",
    },
    {
      grade: "7th Grade",
      subjects: ["Maths", "Science", "English", "SSt"],
      description: "Advanced concepts and critical thinking",
      price: "2000/month",
    },
    {
      grade: "8th Grade",
      subjects: ["Maths", "Science", "English", "Social Science"],
      description: "Preparation for high school transition",
      price: "2000/month",
    },
    {
      grade: "9th Grade",
      subjects: ["Maths", "Science", "English", "Social Science"],
      description: "High school foundation courses",
      price: "4000/month",
    },
    {
      grade: "10th Grade",
      subjects: ["Maths", "Science", "Social Science", "English"],
      description: "Board exams preparation preparation",
      price: "5000/month",
    },
  ]

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Courses</h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Comprehensive courses designed for each grade level
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Card key={course.grade}>
                <CardHeader>
                  <CardTitle>{course.grade}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h3 className="font-bold">Subjects Covered:</h3>
                    <ul className="list-disc list-inside text-gray-500">
                      {course.subjects.map((subject) => (
                        <li key={subject}>{subject}</li>
                      ))}
                    </ul>
                    <p className="text-gray-500">{course.description}</p>
                    <p className="text-lg font-bold text-primary">{course.price}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Enroll Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

