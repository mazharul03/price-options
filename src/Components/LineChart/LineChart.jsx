import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';



const LineChart = () => {

    const subjectMarks = [
        { id: 1, name: "Alice Smith", Math: 85, English: 78, Science: 92, History: 70, ComputerScience: 95 },
        { id: 2, name: "Bob Johnson", Math: 88, English: 82, Science: 85, History: 75, ComputerScience: 90 },
        { id: 3, name: "Carol Davis", Math: 76, English: 90, Science: 80, History: 85, ComputerScience: 88 },
        { id: 4, name: "David Lee", Math: 95, English: 85, Science: 88, History: 80, ComputerScience: 94 },
        { id: 5, name: "Emma Wilson", Math: 70, English: 75, Science: 78, History: 88, ComputerScience: 85 },
        { id: 6, name: "Frank Brown", Math: 82, English: 80, Science: 90, History: 78, ComputerScience: 92 },
        { id: 7, name: "Grace Kim", Math: 78, English: 88, Science: 85, History: 82, ComputerScience: 87 },
        { id: 8, name: "Henry Clark", Math: 92, English: 84, Science: 80, History: 90, ComputerScience: 96 },
        { id: 9, name: "Ivy Martinez", Math: 84, English: 82, Science: 87, History: 85, ComputerScience: 91 },
        { id: 10, name: "Jack Taylor", Math: 90, English: 88, Science: 92, History: 82, ComputerScience: 93 },
    ];


    return (

        <div>
            <LChart width={800} height={400} data={subjectMarks}>
                <XAxis dataKey={'name'} />
                <YAxis />
                <Line dataKey={'Math'} stroke='red'></Line>
                <Line dataKey={'English'} stroke='yellow'></Line>
            </LChart>
        </div>




    );
};

export default LineChart;