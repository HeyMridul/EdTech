import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Video, FileText, Download } from "lucide-react"

export default function ResourcesPage() {
  const studyMaterials = [
    {
      title: "English",
      grade: "Grade 5",
      type: "PDF",
      size: "2.5 MB",
    },
    {
      title: "English",
      grade: "Grade 6",
      type: "PDF",
      size: "3.1 MB",
    },
    {
      title: "English",
      grade: "Grade 7",
      type: "PDF",
      size: "1.8 MB",
    },
    {
      title: "English",
      grade: "Grade 8",
      type: "PDF",
      size: "2.5 MB",
    },
    {
      title: "English",
      grade: "Grade 9",
      type: "PDF",
      size: "3.1 MB",
    },
    {
      title: "English",
      grade: "Grade 10",
      type: "PDF",
      size: "1.8 MB",
    },
    {
      title: "Science",
      grade: "Grade 5",
      type: "PDF",
      size: "2.5 MB",
    },
    {
      title: "Science",
      grade: "Grade 6",
      type: "PDF",
      size: "3.1 MB",
    },
    {
      title: "Science",
      grade: "Grade 7",
      type: "PDF",
      size: "1.8 MB",
    },
    {
      title: "Science",
      grade: "Grade 8",
      type: "PDF",
      size: "2.5 MB",
    },
    {
      title: "Science",
      grade: "Grade 9",
      type: "PDF",
      size: "3.1 MB",
    },
    {
      title: "Science",
      grade: "Grade 10",
      type: "PDF",
      size: "1.8 MB",
    },
    {
      title: "Social Science",
      grade: "Grade 5",
      type: "PDF",
      size: "2.5 MB",
    },
    {
      title: "Social Science",
      grade: "Grade 6",
      type: "PDF",
      size: "3.1 MB",
    },
    {
      title: "Social Science",
      grade: "Grade 7",
      type: "PDF",
      size: "1.8 MB",
    },
    {
      title: "Social Science",
      grade: "Grade 8",
      type: "PDF",
      size: "2.5 MB",
    },
    {
      title: "Social Science",
      grade: "Grade 9",
      type: "PDF",
      size: "3.1 MB",
    },
    {
      title: "Social Science",
      grade: "Grade 10",
      type: "PDF",
      size: "1.8 MB",
    },
    {
      title: "Maths",
      grade: "Grade 5-6",
      type: "PDF",
      size: "2.5 MB",
    },
    {
      title: "Maths",
      grade: "Grade 7-8",
      type: "PDF",
      size: "3.1 MB",
    },
    {
      title: "Maths",
      grade: "Grade 9-10",
      type: "PDF",
      size: "1.8 MB",
    },
  ]

  const videoLectures = [
    {
      title: "Algebra Basics",
      duration: "45 mins",
      grade: "Grade 8",
      subject: "Mathematics",
    },
    {
      title: "Chemical Reactions",
      duration: "30 mins",
      grade: "Grade 9",
      subject: "Science",
    },
    {
      title: "Essay Writing Tips",
      duration: "35 mins",
      grade: "Grade 7",
      subject: "English",
    },
  ]

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Learning Resources</h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Access our comprehensive collection of study materials and video lectures
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="materials" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="materials">Study Materials</TabsTrigger>
              <TabsTrigger value="videos">Video Lectures</TabsTrigger>
            </TabsList>

            <TabsContent value="materials">
              <div className="grid gap-6 md:grid-cols-3">
                {studyMaterials.map((material) => (
                  <Card key={material.title}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        {material.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500">Grade Level: {material.grade}</p>
                      <p className="text-gray-500">Type: {material.type}</p>
                      <p className="text-gray-500">Size: {material.size}</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        <Download className="mr-2 h-4 w-4" /> Download
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos">
              <div className="grid gap-6 md:grid-cols-3">
                {videoLectures.map((lecture) => (
                  <Card key={lecture.title}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Video className="h-5 w-5" />
                        {lecture.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500">Subject: {lecture.subject}</p>
                      <p className="text-gray-500">Grade: {lecture.grade}</p>
                      <p className="text-gray-500">Duration: {lecture.duration}</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Watch Now</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
}

