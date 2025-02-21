import { Card, CardContent } from "@/components/ui/card"
import { UserCircle } from "lucide-react"

export default function AboutPage() {
  const teachers = [
    {
      name: "Dr. Sandeep Bhardwaj",
      subject: "Mathematics",
      experience: "28+ years",
      qualification: "Ph.D. ",
    },
    {
      name: "Mrs. Vandana Bhardwaj",
      subject: "English , Social Science",
      experience: "25+ years",
      qualification: "M.Sc. in English , Economics",
    },
    {
      name: "Mr. Sanjeev Sharma",
      subject: "English",
      experience: "10+ years",
      qualification: "M.A. in Literature",
    },
    {
      name: "Er. Mridul Bhardwaj",
      subject: "Python , Mysql",
      experience: "4+ years",
      qualification: "Masters in Computer Science",
    },
  ]

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About EduSuccess</h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Empowering students through quality education since 1996
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className="text-gray-500">
                At Step Classes, our mission is to provide high-quality education that empowers students to achieve their
                full potential. We believe in creating a supportive learning environment that fosters academic
                excellence and personal growth.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our Vision</h2>
              <p className="text-gray-500">
                We envision being the leading educational institution that transforms students into confident,
                knowledgeable individuals ready to tackle future challenges and contribute positively to society.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold text-center mb-12">Our Expert Teachers</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {teachers.map((teacher) => (
              <Card key={teacher.name}>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <UserCircle className="h-24 w-24 text-primary" />
                  <div>
                    <h3 className="font-bold">{teacher.name}</h3>
                    <p className="text-primary">{teacher.subject}</p>
                    <p className="text-sm text-gray-500">{teacher.qualification}</p>
                    <p className="text-sm text-gray-500">Experience: {teacher.experience}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

