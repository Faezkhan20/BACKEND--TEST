import UserModals from "../Modals/UserModals.js"

export const Register = async (req, res) => {
    try {
        const { name, email, password } = req.body


        if (!email || !password || !name) return res.status(401).json({ success: false, message: "All filed are mandatory" })

        const user = new UserModals({
            name,
            email,
            password
        })

        await user.save()

        return res.status(200).json({ success: true, message: "Registration completed" })


    } catch (error) {
        return res.status(500).json({ success: false, message: error })

    }
}

export const Login= async (req,res)=>{
    try{
        
        const {email,password}=req.body;

        if(!email || !password) return res.status(401).json({ success: false, message: "All filed are mandatory" })

        const user=await UserModals.findOne({email})

        if(!user) return res.status(401).json({ success: false, message: "email not matched" })

        if(user.password==password){
            return res.status(200).json({ success: true, message: "login successfull" })
        }
        else{
            return res.status(500).json({ success: false, message: "password not matched" }) 
        }
       


    }catch(error){
        return res.status(500).json({ success: false, message: error })

    }
}