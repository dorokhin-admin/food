
type AdultOrNotProps = {
    setIsAdult: (value: boolean) => void ;
};

const AdultOrNot = ({setIsAdult}: AdultOrNotProps) => {
    const yesHandler= () => {
        setIsAdult(true);
    };

    const noHandler = () => {
        setIsAdult(false);
    };

    return (
        <div>
            Вам есть 18?
            <button onClick={yesHandler}>yes</button>
            <button onClick={noHandler}>no</button>
        </div>
    );
}

export default AdultOrNot;
console.log('sdasd')