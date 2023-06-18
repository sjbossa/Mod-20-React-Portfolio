
import headshot from "../../images/scotts.jpg";

export default function Home() {
  return (
    <>
      <aside>
        <img src={headshot} alt="Scott Bossard" />
      </aside>
      <div className="sections">
        <section id="About">
          <h2>About Me</h2>
          <p>
            My name is Scott Bossard and I am 53 years old. I have been happily married to my wife Cynthia for 29 years, 
            and we have raised two sons and a daughter aged 28, 24 and 20 here in San Antonio, Texas.
            I recently retired from the United States Navy where I served honorably as a Cryptologic Technician for 22 years.
            I am currently participating in a Full stack bootcamp at the University of Texas San Antonio, learning
            software engineering skills in both front and back-end web development. My military leadership experience provides
            me strength in meeting deadlines, problem solving, and thriving in robust teamwork oriented environments. My hobbies 
            include fishing, rock/fossil hunting, camping, hiking and lapidary arts.
          </p>
        </section>
      </div>
    </>
  );
}