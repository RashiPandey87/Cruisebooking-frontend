"use client";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./BuyTicketsPage.css";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";

const BuyTicketsPage = () => {
  const pathname = usePathname();
  const params = useParams();

  const { cruiseid, cityname } = params;

  const [cruise, setCruise] = React.useState(null);
  const [theatres, setTheatres] = React.useState([]);
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const getCruise = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/cruise/cruises/${cruiseid}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );
      const data = await res.json();
      if (data.ok) {
        setCruise(data.data);
      }
    } catch (error) {
      console.error("Error fetching cruise:", error);
    }
  };

  const getTheatres = async (date) => {
    const formattedDate = date.toISOString().split("T")[0]; // Format date as YYYY-MM-DD
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/cruise/screensbycruiseschedule/${cityname}/${formattedDate}/${cruiseid}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );
      const data = await res.json();
      if (data.ok) {
        setTheatres(data.data);
      } else {
        console.log("No theatres found:", data);
      }
    } catch (error) {
      console.error("Error fetching theatres:", error);
    }
  };

  React.useEffect(() => {
    getCruise();
  }, []);

  React.useEffect(() => {
    if (selectedDate) {
      getTheatres(selectedDate);
    }
  }, [selectedDate]);

  return (
    <>
      {cruise && (
        <div className="buytickets">
          <div className="s1">
            <div className="head">
              <h1>
                {cruise.title} - {cruise.language}
              </h1>
              <h3>{cruise.genre.join(", ")}</h3>
            </div>
           <DatePicker
           selected={selectedDate}
           onChange={(date: any) => setSelectedDate(date)}
           dateFormat="MMMM d, yyyy"
           wrapperClassName="datepicker-wrapper"
       />       
          </div>

          {theatres.length > 0 && (
            <div className="screens">
              {theatres.map((screen, index) => {
                const screenid = screen._id;
                return (
                  <div className="screen" key={index}>
                    <div>
                      <h2>{screen.name}</h2>
                      <h3>{screen.location}</h3>
                    </div>
                    <Link
                      href={`${pathname}/${screenid}?date=${selectedDate.toISOString().split("T")[0]}`}
                      className="theme_btn1 linkstylenone"
                    >
                      Select
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default BuyTicketsPage;
