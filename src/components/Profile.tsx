import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext"
import styles from "../styles/components/Profile.module.css"


export function Profile() {
  
  const { level } = useContext(ChallengesContext);
  
  
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/alanvitalp.png" alt="alan vital"/>
      <div>
        <strong>Alan Vital</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}