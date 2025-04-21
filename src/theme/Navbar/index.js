import React, { useEffect, useState } from 'react';
import NavbarLayout from '@theme/Navbar/Layout';
import NavbarContent from '@theme/Navbar/Content';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import styles from './styles.module.css';
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) return;

    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      const navbar = document.querySelector('nav.navbar');
      if (navbar) {
        navbar.classList.toggle(styles.scrolled, isScrolled);
      }
    };

    handleScroll(); // Ejecutar una vez al montar

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <NavbarLayout>
      <NavbarContent />
    </NavbarLayout>
  );
}
