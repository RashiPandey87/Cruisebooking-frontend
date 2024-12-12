"use client"

import React from 'react'
import './SelectSeat.css';

const page = () => {
    const cruise = {
        moviename: 'Pushpa2',
        // screen: '4Dx',
        date: new Date(),
        language: 'Hindi',
        type: 'Action/Thriller',
        screens: [
            {
                name: 'Screen 1',
                location: 'PVR Cinemas, Forum Mall, Koramangala'
            },
            {
                name: 'Screen 2',
                location: 'PVR Cinemas, Forum Mall, Koramangala'
            },
            {
                name: 'Screen 3',
                location: 'PVR Cinemas, Forum Mall, Koramangala'
            }
        ]
    }

    const screen={
      name:'screen',
      location:'PVR Cinema, Forum Mall, Koramgala',
      timeslots:[
        {
          time :'10:00 AM',
          seats:[
            {
              type:'platinum',
              rows:[
                {
                  //row1
                  rowname:'A',
                  cols:[
                    //cols1
                    {
                      seats:[
                        {
                          type:'seat',
                          status:'availble',
                          seat_id:'1'
                        }
                      ]
                    },
                    //cols2
                    {
                      seats:[
                        {
                          type:'seat',
                          status:'availble',
                          seat_id:'1'
                        }
                      ]
                    },
                  ],

                },
                {
                  //row1
                  rowname:'B',
                  cols:[
                    {
                      seats:[
                        {
                          type:'seat',
                          status:'not-availble',
                           seat_id:'3'
                           
                        }
                      ]
                    },
                    {
                      seats:[
                        {
                          type:'seat',
                          status:'not-availble',
                           seat_id:'4'
                           
                        }
                      ]
                    }

                  ],

                },
                {
                  //row1
                  rowname:'C',
                  cols:[
                    {
                      seats:[
                        {
                          type:'seat',
                          status:'availble',
                          seat_id:'5'

                        }
                      ]
                    },
                    {
                      seats:[
                        {
                          type:'seat',
                          status:'availble',
                          seat_id:'6'

                        }
                      ]
                    }
                  ],

                },
                {
                  //row1
                  rowname:'D',
                  cols:[
                    {
                      seats:[
                        {
                          type:'seat',
                          status:'availble',
                          seat_id:'5'


                        }
                      ]
                    }
                  ],

                },
              ],
              price:500

            },
            {
              type:'gold',
              rows:[
                {
                  //row1
                  rowname:'E',
                  cols:[
                    {
                      seats:[
                        {
                          type:'seat',
                          status:'availble',
                          seat_id:'6'

                        }
                      ]
                    }
                  ],

                },
                {
                  //row1
                  rowname:'F',
                  cols:[
                    {
                      seats:[
                        {
                          type:'seat',
                          status:'availble',
                          seat_id:'7'

                        }
                      ]
                    }
                  ],

                },
                {
                  //row1
                  rowname:'G',
                  cols:[
                    {
                      seats:[
                        {
                          type:'seat',
                          status:'availble',
                          seat_id:'8'

                        }
                      ]
                    }
                  ],

                },
                {
                  //row1
                  rowname:'H',
                  cols:[
                    {
                      seats:[
                        {
                          type:'seat',
                          status:'availble',
                          seat_id:'9'

                        }
                      ]
                    }
                  ],

                },

              ],
              price:300
            },
            {
              type:'silver',
              rows:[
                {
                  //row1
                  rowname:'I',
                  cols:[
                    {
                      seats:[
                        {
                          type:'seat',
                          status:'availble',
                          seat_id:'10'

                        }
                      ]
                    }
                  ],

                },
                {
                  //row1
                  rowname:'J',
                  cols:[
                    {
                      seats:[
                        {
                          type:'seat',
                          status:'availble',
                          seat_id:'11'

                        }
                      ]
                    }
                  ],

                },
               
              ],
              price:200

            }
          ]
        },
         {
          time :'1:00 PM',
          seats:[
            {
              type:'platinum',
              rows:[
                {
                  //row1
                  rowname:'A',
                  cols:[
                    {
                      seats:[
                        {
                          type:'seat',
                          status:'not-availble',
                          seat_id:'13'

                        }
                      ]
                    }
                  ],

                }
              ],
              price:500
              
            },
            {
              type:'gold',
              rows:[
                {
                  //row1
                  rowname:'E',
                  cols:[
                    {
                      seats:[
                        {
                          type:'seat',
                          status:'not-availble',
                          seat_id:'13'

                        }
                      ]
                    }
                  ],

                },
                {
                  //row1
                  rowname:'F',
                  cols:[
                    {
                      seats:[
                        {
                          type:'seat',
                          status:'availble',
                          seat_id:'14'

                        }
                      ]
                    }
                  ],

                },
                {
                  //row1
                  rowname:'G',
                  cols:[
                    {
                      seats:[
                        {
                          type:'seat',
                          status:'availble',
                          seat_id:'16'

                        }
                      ]
                    }
                  ],

                },
              ],
              price:300
            },
            {
              type:'silver',
              rows:[
                {
                  //row1
                  rowname:'H',
                  cols:[
                    {
                      seats:[
                        {
                          type:'seat',
                          status:'availble'
                        }
                      ]
                    }
                  ],

                },
                {
                  //row1
                  rowname:'H',
                  cols:[
                    {
                      seats:[
                        {
                          type:'seat',
                          status:'availble',
                           seat_id:'17'
                        }
                      ]
                    }
                  ],

                },
                {
                  //row1
                  rowname:'I',
                  cols:[
                    {
                      seats:[
                        {
                          type:'seat',
                          status:'availble',
                           seat_id:'18'
                        }
                      ]
                    }
                  ],

                },
                {
                  //row1
                  rowname:'J',
                  cols:[
                    {
                      seats:[
                        {
                          type:'seat',
                          status:'availble',
                           seat_id:'19'
                        }
                      ]
                    }
                  ],

                }

              ],
              price:200
            }
          ]
        },
        {
          time :'03:00 PM',
          seats:[
            {
              type:'platinum',
              rows:[
                {
                  //row1
                  rowname:'A',
                  cols:[
                    {
                      seats:[
                        {
                          type:'seat',
                          status:'availble',
                           seat_id:'19'
                        }
                      ]
                    }
                  ],

                }
              ],
              price:500
            },
            {
              type:'gold',
              rows:[
                {
                  //row1
                  rowname:'E',
                  cols:[
                    {
                      seats:[
                        {
                          type:'seat',
                          status:'availble',
                           seat_id:'21'
                        }
                      ]
                    }
                  ],

                }
              ],
              price:300
            },
            {
              type:'silver',
              rows:[
                {
                  //row1
                  rowname:'E',
                  cols:[
                    {
                      seats:[
                        {
                          type:'seat',
                          status:'availble',
                           seat_id:'22'
                        }
                      ]
                    }
                  ],

                }
              ],
              price:200
            }
          ]
        },
        {
          time :'06:00 PM',
          seats:[
            {
              type:'platinum',
              rows:[
                {
                  //row1
                  rowname:'A',
                  cols:[
                    {
                      seats:[
                        {
                          type:'seat',
                          status:'availble',
                           seat_id:'23'
                        }
                      ]
                    }
                  ],

                }
              ],
              price:500
            },
            {
              type:'gold',
              rows:[
                {
                  //row1
                  rowname:'E',
                  cols:[
                    {
                      seats:[
                        {
                          type:'seat',
                          status:'availble',
                           seat_id:'24'
                        }
                      ]
                    }
                  ],

                }
              ],
              price:300
            },
            {
              type:'silver',
              rows:[
                {
                  //row1
                  rowname:'E',
                  cols:[
                    {
                      seats:[
                        {
                          type:'seat',
                          status:'availble',
                           seat_id:'25'
                        }
                      ]
                    }
                  ],

                }
              ],
              price:200
            }
          ]
        },

      ]

    }
    const generateSeatLayout=()=>{
      const x=screen.timeslots.findIndex((t:any)=>t.time===selectedTime.time)
      return screen.timeslots[x].seats.map((seatType,index)=>(
        <div className='seat-type' key={index}>
          <h2>{seatType.type} -Rs.  {seatType.price}</h2>

          <div className="seat-rows">
            {
              seatType.rows.map((row,rowIndex)=>(
                <div className='seat-row' key={rowIndex}>
                <p className="rowname" >  {row.rowname}</p>
                <div className="seat-cols">
                  {
                    row.cols.map((col,colIndex)=>(
<div className='seat-cols' key={colIndex}>
  {col.seats.map((seat,seatIndex)=>(
    <div key={seatIndex}>
    {
      seat.status=='available' &&
      <span className={
        selectedSeats.find((s:any)=>{
          return s.row===row.rowname && s.seat_id===  seat.seat_id &&
          s.col===colIndex
        })?  "seat-selected": "seat-available"
      }
      onClick={()=>selectdeselectseat({
        row:row.rowname,
        col:colIndex,
        seat_id: seat.seat_id,
        price:seatType.price

      })}
      >
      {seatIndex+1}
    </span>
    }
    {
      seat.status=='not-available' &&
      <span className='seat-unavailable'
     >
      {seatIndex+1}
    </span>
    }
    </div>
  ))}
</div>
                    ))
                  }
                </div>
                </div>
              )

              )
            }
          </div>
        </div>

      ))
    }

    const [selectedTime, setSelectedTime] = React.useState<any>(screen.timeslots[0])

    const [selectedSeats, setSelectedSeats] = React.useState<any[]>([
      {
        "row":"D",
        "col":1,
        "seat_id":"5",
        "price":300
      },
      {
        "row":"D",
        "col":1,
        "seat_id":"6",
        "price":300
      }
    ])

    const selectdeselectseat = (seat: any) => {
      
      const isselected=selectedSeats.findIndex((s:any)=>{
        return s.row===seat.row  && s.col===seat.col &&  s.seat_id===seat.seat_id

      })
     
    }



   

  return (
    <div className='selectseatpage'>
<div className="s1">
<div className="head">
        <h1>{cruise.moviename} - {cruise.language}</h1>
       <h3>{cruise.type}</h3>
        </div>
</div>
<div className="selectseat">
  <div className='timecont'>
    {screen.timeslots.map((time:any,index:number)=>(
      <h3 className={selectedTime.time===time.time?'time selected':'time'}

      onClick={()=>{
        setSelectedTime(time)
      }}

      key={index}
      >
        {time.time}</h3>
    ) )}
  </div>
  <div className="indicators">
    <div>
      <span className='seat-unavailable'></span>
      <p>Not availble</p>
    </div>
    <div>
      <div className="seat-available"></div>
      <p>Available</p>
    </div>
    <div>
                            <span className='seat-selected'></span>
                            <p>Selected</p>
                        </div>
    

  </div>
 
  {generateSeatLayout()}
  <div className="totalcont"></div>
</div>
    </div>
  )
}

export default page
