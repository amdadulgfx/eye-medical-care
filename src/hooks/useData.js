import { useEffect, useState } from "react";

const useData = () => {
    const [services, setServices] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    useEffect(() => {
        fetch('/fakeDoctorData.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

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