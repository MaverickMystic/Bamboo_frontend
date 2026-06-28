import CourseCard from "../components/courseCard"

const Course = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-15 justify-center">
        <h1 className="text-5xl mt-10 text-darkgreen font-bold">年間スケジュール</h1>
        <h1 className="mt-3 text-greensage">現在、5つのコースを提供しています。.</h1>
      </div>
      <div className="grid items-center md:grid-cols-3 md:grid-rows-2 mb-30 grid-cols-1">
        <CourseCard className="break-words text-wrap flex flex-col flex-wrap mx-2 px-2" title="Hiragana Course" time="Classes held 6 times a year" num="N5" des="週2回3週間（土日コースまたは平日2日コース）"/>
        <CourseCard yu="row-span-2" className="row-span-2 break-words text-wrap flex flex-col flex-wrap mx-2 px-2" title="N5 Course" time="授業は年3回（4月、8月、12月）開催されます。" num="N5" des="4ヶ月間は週2回（土・日）、3ヶ月間は週4回"/>
        <CourseCard className="break-words text-wrap flex flex-col flex-wrap mx-2 px-2" title="N4 Course" time="授業は年3回（4月、8月、12月）開催されます。" num="N4" des="週2回、4ヶ月間 "/>
        <CourseCard className="break-words text-wrap flex flex-col flex-wrap mx-2 px-2" title="N3 Course" time="授業は年2回（不定期）開催されます。" num="N3" des="週2回、6ヶ月間"/>
        <CourseCard className="break-words text-wrap flex flex-col flex-wrap mx-2 px-2" title="N2 Course" time="2023年の最初のクラス" num="N2" des="週4回、7ヶ月間"/>
      </div>
    </div>
  )
}

export default Course