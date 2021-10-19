import { useEffect, useState } from "react";

const useData = () => {
    const [services, setServices] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [reviews, setReviews] = useState([]);
    // data fetch for services
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    //data fetch for doctors
    useEffect(() => {
        fetch('/fakeDoctorData.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    //data fetch for review
    useEffect(() => {
        fetch('/fakeReviewData.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return {
        services,
        doctors,
        reviews
    };
};

export default useData;