import { styled } from "styled-components";

import { useEffect, useState } from "react";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const announcementItems = [
  "Welcome to TrackOk",
  "World's best online courier tracker",
  "Assured assistance with TrackOk",
  "Join us, and take the journey",
];

export const Announcements = () => {
  const [currentItem, setCurrentItem] = useState(announcementItems[0]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate the index of the next item to display
      const currentIndex = announcementItems.indexOf(currentItem);
      const nextIndex = (currentIndex + 1) % announcementItems.length;

      // Update the current item
      setCurrentItem(announcementItems[nextIndex]);
    }, 3000); // 3seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentItem]);

  return <Container>{currentItem}</Container>;
};

// When you use the modulo operator (%), it calculates the remainder when the number on the left (1 in this case) is divided by the number on the right (6 in this case). Since 1 is less than 6, the remainder is 1.
