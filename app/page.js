import Image from 'next/image';
import styles from './page.module.css';
import Section from './components/Section/Section';
import Nav from './components/Nav/Nav';

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <Section titulo={'Inicio'} cuerpo={'Cuerpo de Inicio'} />
      <Section titulo={'Clientes'} cuerpo={'Cuerpo de Clientes'} />
      <Section titulo={'Historia'} cuerpo={'Cuerpo de Historia'} />
      <Section titulo={'Servicios'} cuerpo={'Cuerpo de Servicios'} />
      <Section titulo={'Contacto'} cuerpo={'Cuerpo de Contacto'} />
    </main>
  );
}
