import React from 'react';
import { motion } from 'framer-motion';
import { background } from '@chakra-ui/react';

const MenExercisePage = () => {
  const pageStyles = {
    background:'black', // Light grey background
    minHeight: '100vh',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const headerStyles = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '30px',
  };

  const exerciseListStyles = {
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
  };

  const exerciseItemStyles = {
    display: 'flex',
    alignItems: 'center',
    padding: '15px 0',
    borderBottom: '1px solid #ddd',
  };

  const exerciseImageStyles = {
    width: '70px',
    height: '70px',
    marginRight: '15px',
  };

  const exerciseTextStyles = {
    fontSize: '1.2rem',
    color: 'black',
  };

const exercises = [
    { name: 'Jumping Jacks', image: 'https://i.pinimg.com/originals/78/bc/2e/78bc2ed0dc65bc4c4670f513b5046ff5.gif', reps: '00:20' },
    { name: 'Abdominal Crunches', image: 'https://i.pinimg.com/originals/fd/9b/cf/fd9bcfd8660e585e70136507f160dc5d.gif', reps: 'x16' },
    { name: 'Russian Twist', image: 'https://i.pinimg.com/originals/9f/af/63/9faf631d61e4613834a6de66c8e1cafb.gif', reps: 'x20' },
    { name: 'Medicine ball', image: 'https://i.pinimg.com/originals/94/ff/ad/94ffadf464bf05d078f630fda00a7011.gif', reps: 'x16' },
    { name: 'Arm Crunches', image: 'https://i.pinimg.com/originals/0d/cf/6e/0dcf6e7f7efe2b269ab55220a9c1bdbf.gif', reps: 'x20' },
    { name: 'Soccer', image: 'https://i.pinimg.com/originals/da/a7/35/daa735ec2e1c5674bf8636b315c40ce6.gif', reps: 'x16' },
    { name: 'Plank', image: 'https://i.pinimg.com/originals/78/f3/1b/78f31b6a5bb1e1cd63a08e85e295dfb4.gif', reps: '00:20' },
    { name: 'Abdominal Exercise', image: 'https://i.pinimg.com/originals/bd/a3/0f/bda30fe64aacc1db33ac9385071d48e7.gif', reps: '00:16' },
    { name: 'Resistance bands triceps', image: 'https://i.pinimg.com/originals/8b/8e/fc/8b8efcf0c5600bb608669685723423db.gif', reps: 'x8' },
    { name: 'Golf weight traning', image: 'https://i.pinimg.com/originals/8e/46/43/8e464355eceddc2bb00f75c43368ad27.gif', reps: 'x8' },
    { name: 'Ankle wiggles', image: 'https://i.pinimg.com/originals/5d/fa/da/5dfada3ff7c54ac8264eabb1a3842b61.gif', reps: 'x10' },
    { name: 'Leg exercise', image: 'https://i.pinimg.com/originals/ec/52/74/ec5274f13f96683f61af3af2e95a4798.gif', reps: '00:30' },
    { name: 'Push-Ups', image: 'https://i.pinimg.com/originals/4b/da/10/4bda1013b08829bae367c5c9f4eb6408.gif', reps: 'x10' },
    { name: 'Core strength training', image: 'https://i.pinimg.com/originals/e2/c3/00/e2c30049ce1ea410ff188472838ed0a1.gif', reps: 'x8' },
    { name: 'Mountain climbing', image: 'https://i.pinimg.com/originals/9f/af/63/9faf631d61e4613834a6de66c8e1cafb.gif', reps: 'x12' },
    { name: 'Dumbbell floor chest', image: 'https://i.pinimg.com/originals/ad/40/54/ad4054c9ad7b08da0d324c67281252a7.gif', reps: '00:30' },
    { name: 'Dumbbell squats', image: 'https://i.pinimg.com/originals/b2/87/91/b28791fda55992ff8fd6fe4846f0f437.gif', reps: '00:30' },
    { name: 'Tuck crunches', image: 'https://i.pinimg.com/originals/77/40/e3/7740e3fac39ca80df8e0da4c27917ecc.gif', reps: '00:30' },
    { name: 'Resistance band ', image: 'https://i.pinimg.com/originals/44/42/28/4442282b789718c5c40befaebc64b7bb.gif', reps: 'x10' },
  ];
  
  

  return (
    <div style={pageStyles}>
      <header style={headerStyles}>Men's Exercise Routine</header>
      <div style={exerciseListStyles}>
        {exercises.map((exercise, index) => (
          <motion.div key={index} style={exerciseItemStyles} whileHover={{ scale: 1.05 }}>
            <img src={exercise.image} alt={exercise.name} style={exerciseImageStyles} />
            <div style={exerciseTextStyles}>
              <strong>{exercise.name}</strong>
              <div>{exercise.reps}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MenExercisePage;