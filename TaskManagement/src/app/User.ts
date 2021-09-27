export class User{
    // UserId!:number
    // Username!:string
    // Email!:string
    // ContactNumber!:number
    // Role!:string
    // isActive!:boolean
    // DOB!:Date
    // Create_On!:Date
    // password!:string
active!: boolean
contactNumber!:number
create_On!: Date
dob!: Date
email!: string
password!: string
role!: string
userId!: number
username!:string

getPassword() {
    return this.password;
}
getRole(){
    return this.role;
}
getUserId(){
    return this.userId;
}
}