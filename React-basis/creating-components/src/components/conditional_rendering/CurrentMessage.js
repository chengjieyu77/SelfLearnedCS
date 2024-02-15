function CurrentMessage(){
    //getDay: stores the day as number, 0: Sunday, 1: Monday...
    const day = new Date().getDay();

    return(
        <div>
            {day >=1 && day<=5
        ? <Workdays />
        : <Weekends />
         }
        </div>
        
    )
}