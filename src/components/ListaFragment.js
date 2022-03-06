/**
 * Uso do tag vazio para definir um fragment
 * É possível entregar mais elementos no return
 *  sem obrigatóriamente inserí-los num tag div
 */

import styles from './ListaFragment.module.css';

function ListaFragment() {
    return(
        <>
            <p className={styles.font14px}>Lista:</p>
            <ul className={styles.font14px}>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </>
    )
}

export default ListaFragment;