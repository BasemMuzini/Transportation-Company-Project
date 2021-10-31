// ------------------------------------------------------------------ Classes of Vehicles

class Vehicles
{
   // Increment_Number_of_Vehicles=0;
    constructor(Vechicle_ID, Vechicle_Name, Manufacturer_Company)
    {
    this.Vechicle_ID = Vechicle_ID
    this.Vechicle_Name = Vechicle_Name
    this.Manufacturer_Company = Manufacturer_Company;
    //Vehicles.Increment_Number_of_Vehicles()
    }

   // static Increment_Number_of_Vehicles()
    //{Vehicles.Increment_Number_of_Vehicles++} 


/*Check(CheckValue)
{ 
 if(this.Vechicle_ID===CheckValue)
 {
    console.log(true)
     
}
 else
 {console.log(false)}
        
}*/

}
  
class Cars extends Vehicles 
{
    Vechicle_is_Car = true;

    Car_type='Unkown';
   Select(Car_type)
   {
       this.Car_type=Car_type;
       return Car_type;
   }


}
class Planes extends Vehicles 
{
    Vechicle_is_Plane = true;
    Plane_type='Unknown';
     
   Select(Plane_type)
   {
       this.Plane_type=Plane_type;
       return Plane_type;
   }

}


// ------------------------------------------------------------------ Classes of Employees

class Employees 
{
    constructor(Employee_ID, Employee_Name, Birth_Date)
    {
    this.Employee_ID = Employee_ID
    this.Employee_Name = Employee_Name
    this.Birth_Date = Birth_Date;
    }
 
}

  
class Drivers extends Employees 
{
   Employee_is_Driver = true;
   License_ID=null;

   Enter(License_ID)
   {
       this.License_ID=License_ID;
       return License_ID;
   }


}

class Pilots extends Employees 
{
    Employee_is_Pilot =true;
    License_ID=null;

    Enter(License_ID)
    {
        this.License_ID=License_ID;
        return License_ID;
    }


}

// ------------------------------------------------------------------ Classes of Reservations
class Reservations 
{   
    constructor({Reservation_ID, Reservation_Date, Employee_ID, Vechicle_ID})
{
    this.Reservation_ID = Reservation_ID
    this.Reservation_Date = Reservation_Date;
    this.Employee_ID = Employee_ID
    this.Vechicle_ID = Vechicle_ID
}

Book(Employees,Vehicles)
    {
        
        if((Employees.Employee_is_Driver && Vehicles.Vechicle_is_Car) || (Employees.Employee_is_Pilot && Vehicles.Vechicle_is_Plane))
        {
          console.log('YOUR RESERVATION HAS BEEN COMPLETED SUCCESSFULLY')
          console.log(`${this.Reservation_ID}, ${this.Reservation_Date}, ${this.Employee_ID}, ${this.Vechicle_ID}`)
        }
        else
        {
          console.log('SORRY, THE EMPLOYEE DOES NOT COMPLY WITH THE VECHICLE')
        }
    }
   



}



// ------------------------------------------------------------------ Create the objects of tha cars
const car1 = new Cars(900,'Accent','Hyundai');
car1.Select('Electric');
const car2 = new Cars(503,'Camry','Toyota');
car2.Select('Gas');
const car3 = new Cars(234,'Hummer','AM General');
// Here did not select a type of the car, so would be the type is UNKNOWN

// ------------------------------------------------------------------ Create the objects of the planes
const plane1 = new Planes(9959,'Cessna','Textron');
plane1.Select('Private');
const plane2 = new Planes(3974,'Hondajet','Aircraft');
plane2.Select('Business');
const plane3 = new Planes(9583,'Jet','Aircraft');
// Here did not select a type of the plane, so would be the type is UNKNOWN

// ------------------------------------------------------------------ Create the objects of the employees
const Draiver1 = new Drivers(12,'Ibrahim','1/3/1997')
Draiver1.Enter(9999947834)
const Draiver2 = new Drivers(45,'Sami','6/10/2004')
Draiver2.Enter(944098533)
const Pilot1 = new Pilots(150,'Ali','10/02/1990')
Pilot1.Enter(748344444)
const Pilot2 = new Pilots(123,'Husam','10/02/2000')
// Here did not Enter a number of the License, so would be the number is NULL

//----------------------------------------------------------------- Print the outputs



console.log(car1)
console.log(car2)
console.log(car3)
console.log(plane1)
console.log(plane2)
console.log(plane3)
console.log(Draiver1)
console.log(Pilot1)
console.log(Pilot2)



// -------------------------------------------------------- Create the objects of the class Reservations
const Reservation1 = new Reservations({Reservation_ID:1,Reservation_Date:'22/10/2021',Employee_ID:Draiver1.Employee_ID,Vechicle_ID:car1.Vechicle_ID})
Reservation1.Book(Draiver1,car1)


const Reservation2 = new Reservations({Reservation_ID:2,Reservation_Date:'26/11/2021',Employee_ID:Draiver1.Employee_ID,Vechicle_ID:plane1.Vechicle_ID})
Reservation2.Book(Draiver1,plane1)


const Reservation3 = new Reservations({Reservation_ID:3,Reservation_Date:'28/12/2021',Employee_ID:Draiver2.Employee_ID,Vechicle_ID:car2.Vechicle_ID})
Reservation3.Book(Draiver2,car2)

const Reservation4 = new Reservations({Reservation_ID:4,Reservation_Date:'30/12/2021',Employee_ID:Pilot2.Employee_ID,Vechicle_ID:plane1.Vechicle_ID})
Reservation4.Book(Pilot2,plane1)

const Reservation5 = new Reservations({Reservation_ID:3,Reservation_Date:'28/12/2021',Employee_ID:Draiver2.Employee_ID,Vechicle_ID:car2.Vechicle_ID})
Reservation5.Book(Pilot1,car2)