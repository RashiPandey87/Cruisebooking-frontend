"use client"
import React from 'react'
import './SelectSeat.css';
import Link from 'next/link';
import { useParams, usePathname, useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';


const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };
  


const SelectSeatPage = () => {

  const pathname = usePathname()
    const params = useParams()
    const searchParams = useSearchParams()

    const date = searchParams.get('date')
    const { cruiseid, cityname, screenid } = params
    console.log(cruiseid, cityname, screenid)

    const [screen, setScreen] = React.useState<any>(null)
    const [selectedTime, setSelectedTime] = React.useState<any>(null)

    const getschedules = async () => {
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/cruise/schedulebycruise/${screenid}/${date}/${cruiseid}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        })
            .then(res => res.json())
            .then(response => {
                if (response.ok) {
                    console.log(response.data)
                    setScreen(response.data)
                    setSelectedTime(response.data.cruiseSchedulesforDate[0])
                }
                else {
                    console.log(response)
                }
            })
            .catch(err => console.log(err))

    }
      
    const [cruise, setCruise] = React.useState<any>(null)

    const getCruise = async () => {
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/cruise/cruises/${cruiseid}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
          credentials: 'include'
      })
          .then((res) => res.json())
          .then((data) => {
              if (data.ok) {
                  console.log('cruise', data.data)
                  setCruise(data.data)
              }
          })
          .catch((err) => {
              console.log(err)
          })
  }

  React.useEffect(() => {
      getschedules()
      getCruise()
  }, [])
    
  const [selectedSeats, setSelectedSeats] = React.useState<any[]>([])

  const selectdeselectseat = (seat: any) => {
    console.log(seat)
    // {
    //     "row": "F",
    //     "col": 1,
    //     "seat_id": "6",
    //     "price": 500
    // }
    const isselected = selectedSeats.find((s: any) => (
        s.row === seat.row &&
        s.col === seat.col &&
        s.seat_id === seat.seat_id
    ))

    if (isselected) {
        setSelectedSeats(selectedSeats.filter((s: any) => (
            s.row !== seat.row ||
            s.col !== seat.col ||
            s.seat_id !== seat.seat_id
        )))
    }

    else {
        setSelectedSeats([...selectedSeats, seat])
    }
}

const generateSeatLayout = () => {
  const x = screen.cruiseSchedulesforDate.findIndex((t: any) => t.showTime === selectedTime.showTime)

  let notavailableseats = screen.cruiseSchedulesforDate[x].notAvailableSeats


  return (
      <div>
          {screen.screen.seats.map((seatType, index) => (
              <div className="seat-type" key={index}>
                  <h2>{seatType.type} - Rs. {seatType.price}</h2>
                  <div className='seat-rows'>
                      {seatType.rows.map((row, rowIndex) => (
                          <div className="seat-row" key={rowIndex}>
                              <p className="rowname">{row.rowname}</p>
                              <div className="seat-cols">
                                  {row.cols.map((col, colIndex) => (


                                      <div className="seat-col" key={colIndex}>
                                          {col.seats.map((seat, seatIndex) => (
                                              // console.log(seat),

                                              <div key={seatIndex}>
                                                  {
                                                      notavailableseats.find((s: any) => (
                                                          s.row === row.rowname &&
                                                          s.seat_id === seat.seat_id &&
                                                          s.col === colIndex
                                                      )) ?
                                                          <span className='seat-unavailable'>
                                                              {seatIndex + 1}
                                                          </span>
                                                          :
                                                          <span className={
                                                              selectedSeats.find((s: any) => (
                                                                  s.row === row.rowname &&
                                                                  s.seat_id === seat.seat_id &&
                                                                  s.col === colIndex
                                                              )) ? "seat-selected" : "seat-available"
                                                          }
                                                              onClick={() => selectdeselectseat({
                                                                  row: row.rowname,
                                                                  col: colIndex,
                                                                  seat_id: seat.seat_id,
                                                                  price: seatType.price
                                                              })}
                                                          >
                                                              {seatIndex + 1}
                                                          </span>

                                                  }
                                              </div>
                                              // <div key={seatIndex}>
                                              //     {seat.status === 'available' &&
                                              //         <span className={
                                              //             selectedSeats.find((s: any) => (
                                              //                 s.row === row.rowname &&
                                              //                 s.seat_id === seat.seat_id &&
                                              //                 s.col === colIndex
                                              //             )) ? "seat-selected" : "seat-available"
                                              //         }
                                              //         onClick={() => selectdeselectseat({
                                              //             row: row.rowname,
                                              //             col: colIndex,
                                              //             seat_id: seat.seat_id,
                                              //             price: seatType.price
                                              //         })}
                                              //     >
                                              //         {seatIndex + 1}
                                              //     </span>
                                              //     }
                                              //     {seat.status === 'not-available' &&
                                              //         <span className="seat-unavailable">
                                              //             {seatIndex + 1}
                                              //         </span>
                                              //     }
                                              // </div>
                                          ))}
                                      </div>
                                  ))}
                              </div>
                              <br /> <br /> <br />
                          </div>
                      ))}
                  </div>
              </div>
          ))}
      </div>
  );
};



const handlePayment = async () => {
    const isScriptLoaded = await loadRazorpayScript();
  
    if (!isScriptLoaded) {
      toast.error('Failed to load Razorpay SDK. Please try again.');
      return;
    }
  
    // Get Razorpay key from environment variables
    const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
  
    if (!razorpayKey) {
      toast.error('Razorpay key is missing. Please check your environment variables.');
      return;
    }
  
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/cruise/create-order`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          amount: selectedSeats.reduce((acc, seat) => acc + seat.price, 0),
          currency: 'INR',
        }),
      }
    );
  
    const orderData = await response.json();
  
    if (!orderData.ok) {
      toast.error('Failed to create Razorpay order.');
      return;
    }
  
    const options = {
      key: razorpayKey, // Pass the Razorpay key here
      amount: orderData.data.amount_due,
      currency: orderData.data.currency,
      name: 'Cruise Booking',
      description: 'Select your seats',
      order_id: orderData.data.id, // Razorpay order ID
      handler: async (response) => {
        const verifyResponse = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_API}/payment/verify`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            }),
          }
        );
  
        const verifyData = await verifyResponse.json();
  
        if (verifyData.ok) {
          toast.success('Payment verified! Booking successful.');
          handleBooking(response.razorpay_payment_id);
        } else {
          toast.error('Payment verification failed.');
        }
      },
      prefill: {
        name: 'Your Name',
        email: 'your_email@example.com',
        contact: '1234567890',
      },
      theme: { color: '#F37254' },
    };
  
    const rzp = new window.Razorpay(options); // Pass the options with the correct key
    rzp.open();
  };
  

  const handleBooking = (paymentId) => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/cruise/bookticket`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        showTime: selectedTime.showTime,
        showDate: date,
        cruiseId: cruiseid,
        screenId: screenid,
        seats: selectedSeats,
        totalPrice: selectedSeats.reduce((acc, seat) => acc + seat.price, 0),
        paymentId: paymentId, // Razorpay payment ID
        paymentType: 'online',
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.ok) {
          toast.success('Booking Successful');
          console.log(response);
        } else {
          toast.error('Booking Failed');
          console.log(response);
        }
      })
      .catch((err) => console.log(err));
  };
  
  



   

  return (
    <div className='selectseatpage'>
    {
        cruise && screen &&
        <div className='s1'>
            <div className='head'>
                <h1>{cruise.title} - {screen?.screen?.name}</h1>
                <h3>{cruise.genre.join(" / ")}</h3>
            </div>
        </div>
    }

    {
        screen &&
        <div className="selectseat">
            <div className='timecont'>
                {
                    screen.cruiseSchedulesforDate.map((time: any, index: number) => (
                        <h3 className={selectedTime?._id === time._id ? 'time selected' : 'time'} 
                        onClick={() => {
                            setSelectedTime(time)
                            setSelectedSeats([])
                        }} key={index}>
                            {time.showTime}
                        </h3>
                    ))
                }
            </div>
            <div className='indicators'>
                <div>
                    <span className='seat-unavailable'></span>
                    <p>Not available</p>
                </div>
                <div>
                    <span className='seat-available'></span>
                    <p>Available</p>
                </div>
                <div>
                    <span className='seat-selected'></span>
                    <p>Selected</p>
                </div>
            </div>

            {generateSeatLayout()}


            <div className='totalcont'>
                <div className='total'>
                    <h2>Total</h2>
                    <h3>Rs. {selectedSeats.reduce((acc, seat) => acc + seat.price, 0)}</h3>
                </div>

                {/* <Link href="/" className='theme_btn1 linkstylenone'>Continue</Link> */}
                <button
                    className='theme_btn1 linkstylenone'
                    onClick={handlePayment}
                > Pay & Book Now</button>
            </div>
        </div>
    }
    {/* 

    <div className="selectseat">
    
       
        
      
    </div> */}
</div>
)
}
  


export default SelectSeatPage
