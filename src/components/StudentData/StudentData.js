import './StudentData.css';

export default function StudentData({ data }) {
    const { pic,
        firstName,
        lastName,
        email,
        company,
        skill,
        grades } = data;

    return (<>
        <div className='student-card'>
            <img className="profile-img" src={pic} alt={firstName + " " + lastName} />
            <div className='student-info'> 
                <h3>{(firstName + " " + lastName).toUpperCase()}</h3>
                <p>Email: {email}</p>
                <p>Company: {company}</p>
                <p>Skill: {skill}</p>
                <p>Average: {grades.reduce((prev, curr) => prev + parseInt(curr), 0) / grades.length}%</p>
            </div>
        </div>
    </>)
}
