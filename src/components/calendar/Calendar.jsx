import React, { useState } from 'react';
import './calendar.css'

import "react-big-calendar/lib/css/react-big-calendar.css";

function CalendarSchedule() {
  const datesWeek = [{ day: null, active: true, id: 0 }, { day: null, active: false, id: 1 }, { day: null, active: false, id: 1 }, { day: null, active: false, id: 1 }, { day: null, active: false, id: 1 }, { day: null, active: false, id: 1 }, { day: null, active: false, id: 1 },]
  const timesDay = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30']

  const [times, changetimesDetail] = useState([{ week: '01.10 - 07.10', active: true, id: 0 }, { week: '08.10 - 15.10', active: false, id: 1 }, { week: '16.10 - 23.10', active: false, id: 2 }, { week: '24.10 - 31.10', active: false, id: 3 }, { week: '01.11 - 07.11', active: false, id: 4 }])



  const days = ["", "Пн, " + datesWeek[0].day, "Вт, " + datesWeek[1].day, "Ср, " + datesWeek[2].day, "Чт, " + datesWeek[3].day, "Пт, " + datesWeek[4].day, "Сб, " + datesWeek[5].day, "Вс, " + datesWeek[6].day]

  const [events, changeEvents] = useState([{
    type: "time",
    data: ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30']
  },
  {
    type: "day",
    name: "Пн",
    date: "01.02",
    data: [{ event: { name: "Liza", type: 0, id: 0, numberClient: 1 }, disabled: true, open: false }, { event: { name: "Liza", type: 0, id: 0, numberClient: 1 }, disabled: false, open: false }, { event: { groupName: "Друзья", type: 2, id: 1, numberClient: [1, 2, 3] }, disabled: false, open: false }, { event: { groupName: "Друзья", type: 2, id: 1, numberClient: [1, 2, 3] }, disabled: false, open: false }, { event: null, disabled: true, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }]
  },
  {
    type: "day",
    name: "Вт",
    date: "02.02",
    data: [{ event: { name: "Liza", type: 0, id: 0, numberClient: 1 }, disabled: false, open: false }, { event: { name: ["Liza", "Bob"], type: 1, id: 1, numberClient: [1, 2] }, disabled: false, open: false }, { event: { groupName: "Друзья", type: 2, id: 1, numberClient: [1, 2, 3] }, disabled: false, open: false }, { event: { groupName: "Друзья", type: 2, id: 1, numberClient: [1, 2, 3] }, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }]
  },
  {
    type: "day",
    name: "Ср",
    date: "03.02",
    data: [{ event: { name: "Liza", type: 0, id: 0, numberClient: 1 }, disabled: false, open: false }, { event: { name: ["Liza", "Bob"], type: 1, id: 1, numberClient: [1, 2] }, disabled: false, open: false }, { event: { groupName: "Друзья", type: 2, id: 1, numberClient: [1, 2, 3] }, disabled: false, open: false }, { event: { groupName: "Друзья", type: 2, id: 1, numberClient: [1, 2, 3] }, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }]
  },
  {
    type: "day",
    name: "Чт",
    date: "04.02",
    data: [{ event: { name: "Liza", type: 0, id: 0, numberClient: 1 }, disabled: false, open: false }, { event: { name: ["Liza", "Bob"], type: 1, id: 1, numberClient: [1, 2] }, disabled: false, open: false }, { event: { groupName: "Друзья", type: 2, id: 1, numberClient: [1, 2, 3] }, disabled: false, open: false }, { event: { groupName: "Друзья", type: 2, id: 1, numberClient: [1, 2, 3] }, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }]
  },
  {
    type: "day",
    name: "Пт",
    date: "05.02",
    data: [{ event: { name: "Liza", type: 0, id: 0, numberClient: 1 }, disabled: false, open: false }, { event: { name: ["Liza", "Bob"], type: 1, id: 1, numberClient: [1, 2] }, disabled: false, open: false }, { event: { groupName: "Друзья", type: 2, id: 1, numberClient: [1, 2, 3] }, disabled: false, open: false }, { event: { groupName: "Друзья", type: 2, id: 1, numberClient: [1, 2, 3] }, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }]
  },
  {
    type: "day",
    name: "Сб",
    date: "06.02",
    data: [{ event: { name: "Liza", type: 0, id: 0, numberClient: 1 }, disabled: false, open: false }, { event: { name: ["Liza", "Bob"], type: 1, id: 1, numberClient: [1, 2] }, disabled: false, open: false }, { event: { groupName: "Друзья", type: 2, id: 1, numberClient: [1, 2, 3] }, disabled: false, open: false }, { event: { groupName: "Друзья", type: 2, id: 1, numberClient: [1, 2, 3] }, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }]
  },

  {
    type: "day",
    name: "Вс",
    date: "08.02",
    data: [{ event: { name: ["Liza", "Bob"], type: 1, id: 1, numberClient: [1, 2] }, disabled: false, open: false }, { event: { name: ["Liza", "Bob"], type: 1, id: 1, numberClient: [1, 2] }, disabled: false, open: false }, { event: { groupName: "Друзья", type: 2, id: 1, numberClient: [1, 2, 3] }, disabled: false, open: false }, { event: { groupName: "Друзья", type: 2, id: 1, numberClient: [1, 2, 3] }, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: true }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }, { event: null, disabled: false, open: false }]
  }]
  )

  function methodClickSquare(index, jndex, e) {
    e.preventDefault();
    let data = [...events]
    events[jndex].data[index].open  = !(data[jndex].data[index].open )
    changeEvents(data)
  }
  return (
    <div>
      <div className='flex-head mb-1'>
        <button className='button-arrow'><i className="fa-solid fa-angle-left "></i></button>
        <div className='display-contents'> {
          times.map((elem, index) => {
            return (<p className={"mx-1 " + (index === 0 ? 'color-blue' : 'color-grey')}>{elem.week}</p>)
          })
        }</div>
        <button className='button-arrow'><i className="fa-solid fa-angle-right"></i></button> </div>

      <table className='calendar-class'>
        <thead className='blue-head'>
          <tr>
            {
              days.map(elem => {
                return (<th className='th-class'> {elem} </th>)
              })
            }
          </tr>
        </thead>
        <tbody className='body-class'>
          {events[0].data.map((row, index) => (
            <tr>
              {days.map((square, jndex) => (
                <td className={"td-class " + (events[jndex].data &&events[jndex].data[index]["disabled"] === true ? 'disabled-td' : 'we')}>
                  {events[jndex].type === "time" &&
                    row
                  }
                  {events[jndex].type === "day" && events[jndex].data[index] &&
                    <div>
                      {events[jndex].data && events[jndex].data[index].open === false && events[jndex].data[index].disabled === false && events[jndex].data[index].event === null &&
                        <div><i onClick={(e) => methodClickSquare(index,jndex,e)} className="fa-solid fa-square cursor_pointer" style={{ color: '#CDD0D6' }}></i></div>
                      }
                      {events[jndex].data && events[jndex].data[index].open === true && events[jndex].data[index].disabled === false && events[jndex].data[index].event === null &&
                        <div><i onClick={(e) => methodClickSquare(index,jndex,e)} className="fa-solid fa-square cursor_pointer" style={{ color: '#FFA630' }}></i></div>
                      }
                      {events[jndex] && events[jndex].data[index].event && events[jndex].data[index].event.type === 0 &&
                        <div><i className={"fa-solid fa-user " + ((events[jndex].data[index].event && events[jndex].data[index].disabled === true) ||
                          (events[jndex].data[index - 1] &&
                            events[jndex].data[index - 1].event["id"] === events[jndex].data[index].event["id"]
                            && events[jndex].data[index - 1].event["type"] === events[jndex].data[index].event["type"]
                            && events[jndex].data[index - 1].event) ? "person-class-secondary" : "person-class")} title={events[jndex].data[index].event["name"] + " #" + events[jndex].data[index].event["numberClient"] + "\nЛичная терапия"} /></div>
                      }
                      {events[jndex] && events[jndex].data[index].event && events[jndex].data[index].event.type === 1 &&
                        <div><i className={"fa-solid fa-user-group " + ((events[jndex].data[index].event && events[jndex].data[index].disabled === true) ||
                          (events[jndex].data[index - 1] &&
                            events[jndex].data[index - 1].event["id"] === events[jndex].data[index].event["id"]
                            && events[jndex].data[index - 1].event["type"] === events[jndex].data[index].event["type"]
                            && events[jndex].data[index - 1].event) ? "pair-class-secondary" : "pair-class")}
                          title={events[jndex].data[index].event.name[0] + " #" + events[jndex].data[index].event.numberClient[0] + ", " + events[jndex].data[index].event.name[1] + " #" + events[jndex].data[index].event.numberClient[1] + "\nПарная терапия"} />
                        </div>
                      }
                      {events[jndex] && events[jndex].data[index].event && events[jndex].data[index].event.type === 2 &&
                        <div><i className={"fa-solid fa-users " + ((events[jndex].data[index].event && events[jndex].data[index].disabled === true) ||
                          (events[jndex].data[index - 1] &&
                            events[jndex].data[index - 1].event["id"] === events[jndex].data[index].event["id"]
                            && events[jndex].data[index - 1].event["type"] === events[jndex].data[index].event["type"]
                            && events[jndex].data[index - 1].event) ? "group-class-secondary" : "group-class")} title={"Группа " + events[jndex].data[index].event["groupName"] + "\nГрупповая терапия"} />
                        </div>
                      }
                    </div>
                  }
                </td>
                /*   <td className="td-class">{events[jndex + 1].data[index].open}</td> */
              ))}
            </tr>))}
        </tbody>
        {/* <tbody className='body-class'>
          {timesDay.map((row, index) => (
            <tr>
              <td className="td-class">{row}</td>
              <td className={"td-class " + (eventsMonday[index]["disabled"] && eventsMonday[index]["disabled"] === true ? 'disabled-td' : '')}>
                {eventsMonday[index] && eventsMonday[index].open === false && eventsMonday[index].disabled === false && eventsMonday[index].event === null &&
                  <div><i onClick={(e) => methodMondayClick(index, e)} className="fa-solid fa-square cursor_pointer" style={{ color: '#CDD0D6' }}></i></div>
                }
                {eventsMonday[index] && eventsMonday[index].open === true && eventsMonday[index].disabled === false && eventsMonday[index].event === null &&
                  <div><i onClick={(e) => methodMondayClick(index, e)} className="fa-solid fa-square cursor_pointer" style={{ color: '#FFA630' }}></i></div>
                }
                {eventsMonday[index] && eventsMonday[index].event && eventsMonday[index].event.type === 0  &&
                  <div>  <i className={"fa-solid fa-user "+ ((eventsMonday[index] && eventsMonday[index].disabled === true) || (eventsMonday[index-1] && eventsMonday[index-1].event["id"] === eventsMonday[index].event["id"] && eventsMonday[index-1].event["type"] === eventsMonday[index].event["type"]) ? "person-class-secondary" : "person-class" )} title={eventsMonday[index].event.name + " #" + eventsMonday[index].event.numberClient + "\nЛичная терапия"} /></div>
                }
                {eventsMonday[index] && eventsMonday[index].event && eventsMonday[index].event.type === 1  &&
                  <div><i className={"fa-solid fa-user-group "+ ((eventsMonday[index] && eventsMonday[index].disabled === true) || (eventsMonday[index-1] && eventsMonday[index-1].event["id"] === eventsMonday[index].event["id"] && eventsMonday[index-1].event["type"] === eventsMonday[index].event["type"])? "pair-class-secondary" : "pair-class")} 
                  title={eventsMonday[index].event.name[0] + " #" + eventsMonday[index].event.numberClient[0] + ", " + eventsMonday[index].event.name[1] + " #" + eventsMonday[index].event.numberClient[1] + "\nПарная терапия"} />
                  </div>
                }
                {eventsMonday[index] && eventsMonday[index].event && eventsMonday[index].event.type === 2 &&
                  <div><i className={"fa-solid fa-users " + ((eventsMonday[index] && eventsMonday[index].disabled === true) || (eventsMonday[index-1] && eventsMonday[index-1].event["id"] === eventsMonday[index].event["id"] && eventsMonday[index-1].event["type"] === eventsMonday[index].event["type"])? "group-class-secondary" : "group-class")} title={"Группа " + eventsMonday[index].event.groupName + "\nГрупповая терапия"} />
                  </div>
                }
              </td>
              <td className={"td-class " + (eventsTuesday[index]["disabled"] && eventsTuesday[index]["disabled"] === true ? 'disabled-td' : '')}>
                {eventsTuesday[index] && eventsTuesday[index].open === false && eventsTuesday[index].disabled === false && eventsTuesday[index].event === null &&
                  <div><i onClick={(e) => methodTuesdayClick(index, e)} className="fa-solid fa-square cursor_pointer" style={{ color: '#CDD0D6' }}></i></div>
                }
                {eventsTuesday[index] && eventsTuesday[index].open === true && eventsTuesday[index].disabled === false && eventsTuesday[index].event === null &&
                  <div><i onClick={(e) => methodTuesdayClick(index, e)} className="fa-solid fa-square cursor_pointer" style={{ color: '#FFA630' }}></i></div>
                }
                {eventsTuesday[index] && eventsTuesday[index].event && eventsTuesday[index].event.type === 0  &&
                  <div>  <i className={"fa-solid fa-user "+ ((eventsTuesday[index] && eventsTuesday[index].disabled === true) || (eventsTuesday[index-1] && eventsTuesday[index-1].event["id"] === eventsTuesday[index].event["id"] && eventsTuesday[index-1].event["type"] === eventsTuesday[index].event["type"]) ? "person-class-secondary" : "person-class" )} title={eventsTuesday[index].event.name + " #" + eventsTuesday[index].event.numberClient + "\nЛичная терапия"} /></div>
                }
                {eventsTuesday[index] && eventsTuesday[index].event && eventsTuesday[index].event.type === 1  &&
                  <div><i className={"fa-solid fa-user-group "+ ((eventsTuesday[index] && eventsTuesday[index].disabled === true) || (eventsTuesday[index-1] && eventsTuesday[index-1].event["id"] === eventsTuesday[index].event["id"] && eventsTuesday[index-1].event["type"] === eventsTuesday[index].event["type"])? "pair-class-secondary" : "pair-class")} 
                  title={eventsTuesday[index].event.name[0] + " #" + eventsTuesday[index].event.numberClient[0] + ", " + eventsTuesday[index].event.name[1] + " #" + eventsTuesday[index].event.numberClient[1] + "\nПарная терапия"} />
                  </div>
                }
                {eventsTuesday[index] && eventsTuesday[index].event && eventsTuesday[index].event.type === 2 &&
                  <div><i className={"fa-solid fa-users " + ((eventsTuesday[index] && eventsTuesday[index].disabled === true) || (eventsTuesday[index-1] && eventsTuesday[index-1].event["id"] === eventsTuesday[index].event["id"] && eventsTuesday[index-1].event["type"] === eventsTuesday[index].event["type"])? "group-class-secondary" : "group-class")} title={"Группа " + eventsTuesday[index].event.groupName + "\nГрупповая терапия"} />
                  </div>
                }
              </td>
              <td className={"td-class " + (eventsWednesday[index]["disabled"] && eventsWednesday[index]["disabled"] === true ? 'disabled-td' : '')}>
                {eventsWednesday[index] && eventsWednesday[index].open === false && eventsWednesday[index].disabled === false && eventsWednesday[index].event === null &&
                  <div><i onClick={(e) => methodWednesdayClick(index, e)} className="fa-solid fa-square cursor_pointer" style={{ color: '#CDD0D6' }}></i></div>
                }
                {eventsWednesday[index] && eventsWednesday[index].open === true && eventsWednesday[index].disabled === false && eventsWednesday[index].event === null &&
                  <div><i onClick={(e) => methodWednesdayClick(index, e)} className="fa-solid fa-square cursor_pointer" style={{ color: '#FFA630' }}></i></div>
                }
                {eventsWednesday[index] && eventsWednesday[index].event && eventsWednesday[index].event.type === 0  &&
                  <div>  <i className={"fa-solid fa-user "+ ((eventsWednesday[index] && eventsWednesday[index].disabled === true) || (eventsWednesday[index-1] && eventsWednesday[index-1].event["id"] === eventsWednesday[index].event["id"] && eventsWednesday[index-1].event["type"] === eventsWednesday[index].event["type"]) ? "person-class-secondary" : "person-class" )} title={eventsWednesday[index].event.name + " #" + eventsWednesday[index].event.numberClient + "\nЛичная терапия"} /></div>
                }
                {eventsWednesday[index] && eventsWednesday[index].event && eventsWednesday[index].event.type === 1  &&
                  <div><i className={"fa-solid fa-user-group "+ ((eventsWednesday[index] && eventsWednesday[index].disabled === true) || (eventsWednesday[index-1] && eventsWednesday[index-1].event["id"] === eventsWednesday[index].event["id"] && eventsWednesday[index-1].event["type"] === eventsWednesday[index].event["type"])? "pair-class-secondary" : "pair-class")} 
                  title={eventsWednesday[index].event.name[0] + " #" + eventsWednesday[index].event.numberClient[0] + ", " + eventsWednesday[index].event.name[1] + " #" + eventsWednesday[index].event.numberClient[1] + "\nПарная терапия"} />
                  </div>
                }
                {eventsWednesday[index] && eventsWednesday[index].event && eventsWednesday[index].event.type === 2 &&
                  <div><i className={"fa-solid fa-users " + ((eventsWednesday[index] && eventsWednesday[index].disabled === true) || (eventsWednesday[index-1] && eventsWednesday[index-1].event["id"] === eventsWednesday[index].event["id"] && eventsWednesday[index-1].event["type"] === eventsWednesday[index].event["type"])? "group-class-secondary" : "group-class")} title={"Группа " + eventsWednesday[index].event.groupName + "\nГрупповая терапия"} />
                  </div>
                }
              </td>
              <td className={"td-class " + (eventsThursday[index]["disabled"] && eventsThursday[index]["disabled"] === true ? 'disabled-td' : '')}>
                {eventsThursday[index] && eventsThursday[index].open === false && eventsThursday[index].disabled === false && eventsThursday[index].event === null &&
                  <div><i onClick={(e) => methodThursdayClick(index, e)} className="fa-solid fa-square cursor_pointer" style={{ color: '#CDD0D6' }}></i></div>
                }
                {eventsThursday[index] && eventsThursday[index].open === true && eventsThursday[index].disabled === false && eventsThursday[index].event === null &&
                  <div><i onClick={(e) => methodThursdayClick(index, e)} className="fa-solid fa-square cursor_pointer" style={{ color: '#FFA630' }}></i></div>
                }
                {eventsThursday[index] && eventsThursday[index].event && eventsThursday[index].event.type === 0  &&
                  <div>  <i className={"fa-solid fa-user "+ ((eventsThursday[index] && eventsThursday[index].disabled === true) || (eventsThursday[index-1] && eventsThursday[index-1].event["id"] === eventsThursday[index].event["id"] && eventsThursday[index-1].event["type"] === eventsThursday[index].event["type"]) ? "person-class-secondary" : "person-class" )} title={eventsThursday[index].event.name + " #" + eventsThursday[index].event.numberClient + "\nЛичная терапия"} /></div>
                }
                {eventsThursday[index] && eventsThursday[index].event && eventsThursday[index].event.type === 1  &&
                  <div><i className={"fa-solid fa-user-group "+ ((eventsThursday[index] && eventsThursday[index].disabled === true) || (eventsThursday[index-1] && eventsThursday[index-1].event["id"] === eventsThursday[index].event["id"] && eventsThursday[index-1].event["type"] === eventsThursday[index].event["type"])? "pair-class-secondary" : "pair-class")} 
                  title={eventsThursday[index].event.name[0] + " #" + eventsThursday[index].event.numberClient[0] + ", " + eventsThursday[index].event.name[1] + " #" + eventsThursday[index].event.numberClient[1] + "\nПарная терапия"} />
                  </div>
                }
                {eventsThursday[index] && eventsThursday[index].event && eventsThursday[index].event.type === 2 &&
                  <div><i className={"fa-solid fa-users " + ((eventsThursday[index] && eventsThursday[index].disabled === true) || (eventsThursday[index-1] && eventsThursday[index-1].event["id"] === eventsThursday[index].event["id"] && eventsThursday[index-1].event["type"] === eventsThursday[index].event["type"])? "group-class-secondary" : "group-class")} title={"Группа " + eventsThursday[index].event.groupName + "\nГрупповая терапия"} />
                  </div>
                }
              </td>
              <td className={"td-class " + (eventsFriday[index]["disabled"] && eventsFriday[index]["disabled"] === true ? 'disabled-td' : '')}>
                {eventsFriday[index] && eventsFriday[index].open === false && eventsFriday[index].disabled === false && eventsFriday[index].event === null &&
                  <div><i onClick={(e) => methodFridayClick(index, e)} className="fa-solid fa-square cursor_pointer" style={{ color: '#CDD0D6' }}></i></div>
                }
                {eventsFriday[index] && eventsFriday[index].open === true && eventsFriday[index].disabled === false && eventsFriday[index].event === null &&
                  <div><i onClick={(e) => methodFridayClick(index, e)} className="fa-solid fa-square cursor_pointer" style={{ color: '#FFA630' }}></i></div>
                }
                {eventsFriday[index] && eventsFriday[index].event && eventsFriday[index].event.type === 0  &&
                  <div>  <i className={"fa-solid fa-user "+ ((eventsFriday[index] && eventsFriday[index].disabled === true) || (eventsFriday[index-1] && eventsFriday[index-1].event["id"] === eventsFriday[index].event["id"] && eventsFriday[index-1].event["type"] === eventsFriday[index].event["type"]) ? "person-class-secondary" : "person-class" )} title={eventsFriday[index].event.name + " #" + eventsFriday[index].event.numberClient + "\nЛичная терапия"} /></div>
                }
                {eventsFriday[index] && eventsFriday[index].event && eventsFriday[index].event.type === 1  &&
                  <div><i className={"fa-solid fa-user-group "+ ((eventsFriday[index] && eventsFriday[index].disabled === true) || (eventsFriday[index-1] && eventsFriday[index-1].event["id"] === eventsFriday[index].event["id"] && eventsFriday[index-1].event["type"] === eventsFriday[index].event["type"])? "pair-class-secondary" : "pair-class")} 
                  title={eventsFriday[index].event.name[0] + " #" + eventsFriday[index].event.numberClient[0] + ", " + eventsFriday[index].event.name[1] + " #" + eventsFriday[index].event.numberClient[1] + "\nПарная терапия"} />
                  </div>
                }
                {eventsFriday[index] && eventsFriday[index].event && eventsFriday[index].event.type === 2 &&
                  <div><i className={"fa-solid fa-users " + ((eventsFriday[index] && eventsFriday[index].disabled === true) || (eventsFriday[index-1] && eventsFriday[index-1].event["id"] === eventsFriday[index].event["id"] && eventsFriday[index-1].event["type"] === eventsFriday[index].event["type"])? "group-class-secondary" : "group-class")} title={"Группа " + eventsFriday[index].event.groupName + "\nГрупповая терапия"} />
                  </div>
                }
              </td>
              <td className={"td-class " + (eventsSaturday[index]["disabled"] && eventsSaturday[index]["disabled"] === true ? 'disabled-td' : '')}>
                {eventsSaturday[index] && eventsSaturday[index].open === false && eventsSaturday[index].disabled === false && eventsSaturday[index].event === null &&
                  <div><i onClick={(e) => methodSaturdayClick(index, e)} className="fa-solid fa-square cursor_pointer" style={{ color: '#CDD0D6' }}></i></div>
                }
                {eventsSaturday[index] && eventsSaturday[index].open === true && eventsSaturday[index].disabled === false && eventsSaturday[index].event === null &&
                  <div><i onClick={(e) => methodSaturdayClick(index, e)} className="fa-solid fa-square cursor_pointer" style={{ color: '#FFA630' }}></i></div>
                }
                {eventsSaturday[index] && eventsSaturday[index].event && eventsSaturday[index].event.type === 0  &&
                  <div>  <i className={"fa-solid fa-user "+ ((eventsSaturday[index] && eventsSaturday[index].disabled === true) || (eventsSaturday[index-1] && eventsSaturday[index-1].event["id"] === eventsSaturday[index].event["id"] && eventsSaturday[index-1].event["type"] === eventsSaturday[index].event["type"]) ? "person-class-secondary" : "person-class" )} title={eventsSaturday[index].event.name + " #" + eventsSaturday[index].event.numberClient + "\nЛичная терапия"} /></div>
                }
                {eventsSaturday[index] && eventsSaturday[index].event && eventsSaturday[index].event.type === 1  &&
                  <div><i className={"fa-solid fa-user-group "+ ((eventsSaturday[index] && eventsSaturday[index].disabled === true) || (eventsSaturday[index-1] && eventsSaturday[index-1].event["id"] === eventsSaturday[index].event["id"] && eventsSaturday[index-1].event["type"] === eventsSaturday[index].event["type"])? "pair-class-secondary" : "pair-class")} 
                  title={eventsSaturday[index].event.name[0] + " #" + eventsSaturday[index].event.numberClient[0] + ", " + eventsSaturday[index].event.name[1] + " #" + eventsSaturday[index].event.numberClient[1] + "\nПарная терапия"} />
                  </div>
                }
                {eventsSaturday[index] && eventsSaturday[index].event && eventsSaturday[index].event.type === 2 &&
                  <div><i className={"fa-solid fa-users " + ((eventsSaturday[index] && eventsSaturday[index].disabled === true) || (eventsSaturday[index-1] && eventsSaturday[index-1].event["id"] === eventsSaturday[index].event["id"] && eventsSaturday[index-1].event["type"] === eventsSaturday[index].event["type"])? "group-class-secondary" : "group-class")} title={"Группа " + eventsSaturday[index].event.groupName + "\nГрупповая терапия"} />
                  </div>
                }
              </td>
              <td className={"td-class " + (eventsSunday[index]["disabled"] && eventsSunday[index]["disabled"] === true ? 'disabled-td' : '')}>
                {eventsSunday[index] && eventsSunday[index].open === false && eventsSunday[index].disabled === false && eventsSunday[index].event === null &&
                  <div><i onClick={(e) => methodSundayClick(index, e)} className="fa-solid fa-square cursor_pointer" style={{ color: '#CDD0D6' }}></i></div>
                }
                {eventsSunday[index] && eventsSunday[index].open === true && eventsSunday[index].disabled === false && eventsSunday[index].event === null &&
                  <div><i onClick={(e) => methodSundayClick(index, e)} className="fa-solid fa-square cursor_pointer" style={{ color: '#FFA630' }}></i></div>
                }
                {eventsSunday[index] && eventsSunday[index].event && eventsSunday[index].event.type === 0  &&
                  <div>  <i className={"fa-solid fa-user "+ ((eventsSunday[index] && eventsSunday[index].disabled === true) || (eventsSunday[index-1] && eventsSunday[index-1].event["id"] === eventsSunday[index].event["id"] && eventsSunday[index-1].event["type"] === eventsSunday[index].event["type"]) ? "person-class-secondary" : "person-class" )} title={eventsSunday[index].event.name + " #" + eventsSunday[index].event.numberClient + "\nЛичная терапия"} /></div>
                }
                {eventsSunday[index] && eventsSunday[index].event && eventsSunday[index].event.type === 1  &&
                  <div><i className={"fa-solid fa-user-group "+ ((eventsSunday[index] && eventsSunday[index].disabled === true) || (eventsSunday[index-1] && eventsSunday[index-1].event["id"] === eventsSunday[index].event["id"] && eventsSunday[index-1].event["type"] === eventsSunday[index].event["type"])? "pair-class-secondary" : "pair-class")} 
                  title={eventsSunday[index].event.name[0] + " #" + eventsSunday[index].event.numberClient[0] + ", " + eventsSunday[index].event.name[1] + " #" + eventsSunday[index].event.numberClient[1] + "\nПарная терапия"} />
                  </div>
                }
                {eventsSunday[index] && eventsSunday[index].event && eventsSunday[index].event.type === 2 &&
                  <div><i className={"fa-solid fa-users " + ((eventsSunday[index] && eventsSunday[index].disabled === true) || (eventsSunday[index-1] && eventsSunday[index-1].event["id"] === eventsSunday[index].event["id"] && eventsSunday[index-1].event["type"] === eventsSunday[index].event["type"])? "group-class-secondary" : "group-class")} title={"Группа " + eventsSunday[index].event.groupName + "\nГрупповая терапия"} />
                  </div>
                }
              </td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </div>

  );
}

export default CalendarSchedule;
