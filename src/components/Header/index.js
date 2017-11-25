import React from 'react';
import styles from './header.css';

class Header extends React.Component{

   /*constructor(){
      super();

      this.state = {
         mostrar: true
      };

      this.handleScroll = this.handleScroll.bind(this);
   }*/

   /*componentDidMount(){
      window.addEventListener('scroll', this.handleScroll);
   }

   componentWillUnmount(){
      window.removeListener('scroll', this.handleScroll);
   }

   handleScroll(){
      this.setState({
         mostrar: !(window.scrollY>20)
      });

   }*/

   /*className={(!this.state.mostrar)?styles.titulo : ''}*/

   render(){
      return(
         <header className={styles.root}>
            <h1>Sistema Incidencias</h1>
         </header>
      );
   }
}

export default Header;