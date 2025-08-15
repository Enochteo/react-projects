import React from "react";
import Event from "./Events";

const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <td></td>
                        <td>Sunday</td>
                        <td>Monday</td>
                        <td>Tuesday</td>
                        <td>Wednesday</td>
                        <td>Thursday</td>
                        <td>Friday</td>
                        <td>Saturday</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <td><Event event="Leetcode" color = "green" location="Jacob T. Steward Building"/></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><Event event="class" color = "red" location="Woodson Hall"/></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><Event event="Group Meeting" color = "green" location="Carver Hall"/></td>
                        <td></td>
                        <td></td>
                        <td><Event event="ASA meeting" color = "blue" location="FSUB student building"/></td>
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <td></td>
                        <td><Event event="NSBE meeting" color = "red" location="T.H. James Building"/></td>
                        <td></td>
                        <td></td>
                        <td><Event event="Project work" color = "green" location="School Dormitory"/></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <td><Event event="Portfolio work" color = "green" location="Brown Hall"/></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><Event event="Applications" color = "red" location="School Dormitory"/></td>
                        <td><Event event="Assignments" color = "green" location="School Dormitory"/></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <td><Event event="Meeting" color = "blue" location="Virtual -> Zoom"/></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <td></td>
                        <td></td>
                        <td><Event event="Shopping" color = "green" location="Dollar General"/></td>
                        <td></td>
                        <td></td>
                        <td><Event event="Cleaning" color = "red" location="Room"/></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <td></td>
                        <td><Event event="Church" color = "green" location="Church" /></td>
                        <td></td>
                        <td></td>
                        <td><Event event="Ping pong" color = "blue" location="Student center"/></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Calendar;