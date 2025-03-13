import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
//import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Card, CardContent } from "@/components/ui/card";
//import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Define types for our data
interface Exercise {
  name: string;
  time: string;
  reps: string;
  gif: string;
}

type ExercisesData = {
  [day: string]: Exercise[];
};

// type CompletedExercises = {
//   [day: string]: boolean[];
// };

const GymApp: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>("Monday");
 // const [completedExercises, setCompletedExercises] = useState<CompletedExercises>({});
 const [buttonMessage, setButtonMessage] = useState<string>("Mark as Done");

  // const toggleCompletion = (day: string, index: number): void => {
  //   setCompletedExercises((prev) => {
  //     const updated = { ...prev };
  //     updated[day] = updated[day] || [];
  //     updated[day][index] = !updated[day][index];
  //     return { ...updated };
  //   });
  // };

  const toogleButton = () => {
    if(buttonMessage === "Completed!✅") {
      setButtonMessage('Mark as Done')
      return;
    }
    setButtonMessage("Completed!✅")
  }

  const exercisesData: ExercisesData = {
  Monday: [
    { name: "Développé couché barre", time: "14 min", reps: "5x8", gif: "https://www.docteur-fitness.com/wp-content/uploads/2019/08/developpe-couche.gif" },
    { name: "Développé incliné haltères", time: "14 min", reps: "5x10", gif: "https://www.docteur-fitness.com/wp-content/uploads/2000/06/developpe-incline-halteres-exercice-musculation.gif" },
    { name: "Dips lestés", time: "12 min", reps: "4x10", gif: "https://www.docteur-fitness.com/wp-content/uploads/2000/01/dips-triceps.gif" },
    { name: "Écarté couché haltères", time: "10 min", reps: "4x12", gif: "https://www.docteur-fitness.com/wp-content/uploads/2022/09/ecarte-couche-haltere.gif" },
    { name: "Triceps barre au front", time: "10 min", reps: "4x10", gif: "https://www.docteur-fitness.com/wp-content/uploads/2000/09/barre-front.gif" },
    { name: "Dips poids du corps", time: "10 min", reps: "4x12", gif: "https://www.docteur-fitness.com/wp-content/uploads/2022/05/dips-entre-deux-bancs.gif" },
    { name: "Pompes explosives", time: "10 min", reps: "3x max reps", gif: "https://www.docteur-fitness.com/wp-content/uploads/2020/10/pompe-declinee.gif" },
  ],
  Tuesday: [
    { name: "Tractions lestées", time: "14 min", reps: "5x8", gif: "https://www.docteur-fitness.com/wp-content/uploads/2022/02/traction-lestee.gif" },
    { name: "Rowing barre pronation", time: "14 min", reps: "5x10", gif: "https://boxlifemagazine.com/wp-content/uploads//2023/08/rowing-barre-min-2.gif" },
    { name: "Soulevé de terre lourd", time: "14 min", reps: "4x6", gif: "https://www.docteur-fitness.com/wp-content/uploads/2022/04/souleve-de-terre-roumain.gif" },
    { name: "Tirage horizontal poulie", time: "10 min", reps: "4x12", gif: "https://www.docteur-fitness.com/wp-content/uploads/2022/02/tirage-horizontal-poulie.gif" },
    { name: "Curl barre EZ", time: "10 min", reps: "4x10", gif: "https://www.docteur-fitness.com/wp-content/uploads/2022/01/curl-au-pupitre-barre-ez-larry-scott.gif" },
    { name: "Curl marteau haltères", time: "10 min", reps: "4x12", gif: "https://www.fitadium.com/conseils/wp-content/uploads/2020/11/03131301-Dumbbell-Hammer-Curl_Forearm_720.gif" },
    { name: "Curl concentré", time: "8 min", reps: "3x12", gif: "https://www.docteur-fitness.com/wp-content/uploads/2021/09/curl-concentre.gif" },
  ],
  Wednesday: [
    { name: "Squat barre", time: "14 min", reps: "5x8", gif: "https://www.docteur-fitness.com/wp-content/uploads/2021/11/squat-barre-devant-front.gif" },
    { name: "Presse inclinée", time: "14 min", reps: "5x10", gif: "https://www.docteur-fitness.com/wp-content/uploads/2022/08/presse-a-cuisses-inclinee.gif" },
    { name: "Fentes marchées haltères", time: "12 min", reps: "4x12", gif: "https://www.docteur-fitness.com/wp-content/uploads/2000/06/fentes-avant-exercice-musculation.gif" },
    { name: "Leg curl allongé", time: "10 min", reps: "4x12", gif: "https://www.docteur-fitness.com/wp-content/uploads/2021/10/leg-curl-allonge.gif" },
    { name: "Mollets debout presse", time: "10 min", reps: "5x15", gif: "https://www.docteur-fitness.com/wp-content/uploads/2021/10/extension-mollets-debout-machine.gif" },
    { name: "Mollets assis machine", time: "10 min", reps: "5x15", gif: "https://www.docteur-fitness.com/wp-content/uploads/2021/10/extension-mollets-assis-machine.gif" },
    { name: "Sauts sur box", time: "10 min", reps: "3x15", gif: "https://www.docteur-fitness.com/wp-content/uploads/2022/09/jump-box.gif" },
  ],
  Thursday: [
    { name: "Développé militaire haltères", time: "14 min", reps: "5x8", gif: "https://www.docteur-fitness.com/wp-content/uploads/2022/02/developpe-epaules-halteres-debout.gif" },
    { name: "Élévations latérales", time: "12 min", reps: "5x12", gif: "https://i.pinimg.com/originals/8b/d3/74/8bd3745dca0749b912b08b0d4bca3833.gif" },
    { name: "Rowing menton barre EZ", time: "12 min", reps: "5x10", gif: "https://www.docteur-fitness.com/wp-content/uploads/2021/11/tirage-menton-machine-guidee.gif" },
    { name: "Oiseau haltères", time: "10 min", reps: "4x12", gif: "https://www.docteur-fitness.com/wp-content/uploads/2021/12/oiseau-assis-sur-banc.gif" },
    { name: "Relevés de jambes suspendu", time: "10 min", reps: "4x15", gif: "https://www.docteur-fitness.com/wp-content/uploads/2000/07/releve-de-genoux-suspendu-exercice-musculation.gif" },
    { name: "Crunch lesté", time: "10 min", reps: "4x15", gif: "https://www.docteur-fitness.com/wp-content/uploads/2022/02/sit-up-decline-leste.gif" },
    { name: "Planche lestée", time: "10 min", reps: "3x1 min", gif: "https://www.docteur-fitness.com/wp-content/uploads/2022/05/planche-abdos.gif" },
  ],
  Friday: [
    { name: "Développé couché haltères", time: "12 min", reps: "4x8", gif: "https://www.docteur-fitness.com/wp-content/uploads/2000/05/developpe-couche-halteres-exercice-musculation.gif" },
    { name: "Squat goblet", time: "12 min", reps: "4x10", gif: "https://www.inspireusafoundation.org/wp-content/uploads/2023/08/heel-elevated-goblet-squat.gif" },
    { name: "Tractions supination", time: "12 min", reps: "4x10", gif: "https://www.docteur-fitness.com/wp-content/uploads/2021/08/chin-up-traction-supination.gif" },
    { name: "Soulevé de terre roumain", time: "12 min", reps: "4x8", gif: "https://www.docteur-fitness.com/wp-content/uploads/2022/04/souleve-de-terre-roumain.gif" },
    { name: "Dips lestés", time: "12 min", reps: "4x12", gif: "https://www.docteur-fitness.com/wp-content/uploads/2000/01/dips-triceps.gif" },
    { name: "Burpees explosifs", time: "10 min", reps: "3x15", gif: "https://www.docteur-fitness.com/wp-content/uploads/2019/08/burpee-muscle-sollicites.gif" },
  ],
  Saturday: [
    { name: "Tractions pronation", time: "14 min", reps: "5x8", gif: "https://www.docteur-fitness.com/wp-content/uploads/2022/02/traction-musculation-dos.gif" },
    { name: "Rowing haltères", time: "14 min", reps: "5x10", gif: "https://www.docteur-fitness.com/wp-content/uploads/2021/08/rowing-haltere-un-bras.gif" },
    { name: "Développé militaire barre", time: "12 min", reps: "4x8", gif: "https://www.docteur-fitness.com/wp-content/uploads/2000/08/developpe-militaire-exercice-musculation.gif" },
    { name: "Extensions poulie triceps", time: "10 min", reps: "4x12", gif: "https://www.docteur-fitness.com/wp-content/uploads/2021/10/extension-triceps-poulie-haute-corde.gif" },
    { name: "Dips lestés", time: "10 min", reps: "4x12", gif: "https://www.docteur-fitness.com/wp-content/uploads/2000/01/dips-triceps.gif" },
    { name: "Pompes triceps", time: "10 min", reps: "3x15", gif: "https://www.docteur-fitness.com/wp-content/uploads/2021/01/pompe-gilet-leste.gif" },
    { name: "Pull-over haltères", time: "10 min", reps: "3x12", gif: "https://www.docteur-fitness.com/wp-content/uploads/2021/12/pullover-haltere.gif" },
  ],
  Sunday: [
    { name: "Squat sumo barre", time: "14 min", reps: "5x8", gif: "https://www.docteur-fitness.com/wp-content/uploads/2022/12/squat-sumo-avec-haltere.gif" },
    { name: "Fentes bulgares", time: "14 min", reps: "5x10", gif: "https://www.docteur-fitness.com/wp-content/uploads/2022/04/fentes-arriere-landmine.gif" },
    { name: "Presse jambes large", time: "12 min", reps: "4x12", gif: "https://www.docteur-fitness.com/wp-content/uploads/2022/08/presse-a-cuisses-inclinee.gif" },
    { name: "Leg curl assis", time: "10 min", reps: "4x12", gif: "https://www.docteur-fitness.com/wp-content/uploads/2022/02/leg-curl-assis-machine.gif" },
    { name: "Mollets presse inclinée", time: "10 min", reps: "5x15", gif: "https://www.docteur-fitness.com/wp-content/uploads/2022/08/extension-mollets-smith-machine.gif" },
    { name: "Relevés de jambes suspendu", time: "10 min", reps: "4x15", gif: "https://www.docteur-fitness.com/wp-content/uploads/2022/04/releve-jambes-flechies-musculation-abdos.gif" },
    { name: "Russian Twists lestés", time: "10 min", reps: "3x20", gif: "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/08/russiantwistfeetraised-1472133891.gif" },
  ],
  };

  const days: string[] = Object.keys(exercisesData);
  const exercises: Exercise[] = exercisesData[selectedDay];

  return (
    <div className="p-4 max-w-sm mx-auto text-center h-[100vh] bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-6">💪 FitFlow</h1>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex overflow-x-auto space-x-3 pb-2 px-2 scrollbar-hide"
      >
        {days.map((day) => (
          <button
            key={day}
            className={`px-5 py-2 text-sm rounded-full whitespace-nowrap ${selectedDay === day ? 'bg-blue-500 shadow-lg' : 'bg-gray-700'}`}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </motion.div>
      <Swiper spaceBetween={10} slidesPerView={1} className="mt-6 h-[80vh]">
        {exercises.map((exercise, index) => (
          <SwiperSlide key={index} className="h-full">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="h-full ">
              <Card className={` p-4 rounded-2xl shadow-lg bg-gray-800 backdrop-blur-md ${buttonMessage !== 'Mark as Done'? 'opacity-50' : ''}`}>
                <CardContent className="flex flex-col h-full p-1 gap-2">
                  <img src={exercise.gif} alt={exercise.name} className="w-full h-84 object-cover rounded-xl" />
                  <h2 className="text-xl font-semibold mt-4 text-white">{exercise.name}</h2>
                  <p className="text-sm text-gray-400">Time: {exercise.time} | Sets: {exercise.reps}</p>
                  <button
                    className={`mt-auto px-4 py-2 w-full rounded-md text-white ${buttonMessage === 'Mark as Done'? 'bg-green-500' : 'bg-gray-600'}`}
                    onClick={toogleButton}
                  >
                    {buttonMessage}
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GymApp;