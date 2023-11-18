import ProductModals from "../Modals/ProductModals.js"

export const AddProduct = async (req, res) => {

    try {



        const { name, price, category, imageurl } = req.body

        if (!name || !price || !category || !imageurl) return res.status(401).json({ success: false, message: "All filed are mandatory" })
        const product = new ProductModals({
            name,
            price,
            imageurl,
            category
        })

        await product.save()
        return res.status(200).json({ success: true, message: "product added successfully" })
    }
    catch (error) {
        return res.status(500).json({ success: false, message: error })

    }

}
export const GetProduct = async (req, res) => {

    try{


        const products=await ProductModals.find({})
        return res.status(200).json({success:true,message:"products found",products})

    }catch(error){
        return res.status(500).json({ success: false, message: error })
    }

}