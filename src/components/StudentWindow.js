import { useState, useEffect } from 'react';
import StudentData from './StudentData';

export default function StudentWindow() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('https://api.hatchways.io/assessment/students')
            .then(res => res.json())
            .then((data) => {
                setIsLoaded(true);
                setStudents(data.students);
                console.log(data.students);
            }, (error) => {
                setIsLoaded(true);
                setError(error);
            });
    }, []);

    if (!isLoaded) {
        return <p>Loading...</p>;
    }else if (error){
        return <p>{error}</p>;
    } else {
        return (<>
            <div>
                {students.map((student) => {
                    return <StudentData data={student} key={student.id}></StudentData>
                })}
            </div>
        </>);
    }
}