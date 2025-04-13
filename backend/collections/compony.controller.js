import { Company } from "../models/company.js";

export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;

    if (!companyName) {
      return res.status(400).json({
        message: "Please enter company name",
        success: false,
      });
    }

    if (!req.id) {
      return res.status(401).json({
        message: "Unauthorized access",
        success: false,
      });
    }

    let company = await Company.findOne({ name: companyName });

    if (company) {
      return res.status(400).json({
        message: "Company already exists",
        success: false,
      });
    }

    company = await Company.create({
      name: companyName,
      userId: req.id,
    });

    return res.status(201).json({
      message: "Company created successfully",
      success: true,
      company,
    });
  } catch (error) {
    console.error("Error registering company:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

export const getCompany = async (req, res) => {
    try {
        const userId = req.id; // logged in user id
        const companies = await Company.find({ userId });
        if (!companies) {
            return res.status(404).json({
                message: "Companies not found.",
                success: false
            })
        }
        return res.status(200).json({
            companies,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}
// get copany by id
export const getCompanyById = async (req, res) => {
    try {
        const companyid  = req.params.id;
        const company = await Company.findById(companyid);
        if (!company) {
            return res.status(404).json({
                message: "Company not found",
                success: false,
                });
                }
                return res.status(200).json({
                    message: "Company found",
                    success: true,
                    company,
                    });

         
    }catch(error){
        console.error("Error getting company by id:", error);
    }
}

// company update feature
export const updateCompany = async (req, res) => {
    try {
        const { name, description, website, location } = req.body;
 
        const file = req.file; // company ka logo lene ke liye 
        // idhar cloudinary ayega
        // const fileUri = getDataUri(file);
        // const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
        // const logo = cloudResponse.secure_url;
    
        const updateData = { name, description, website, location };

        const company = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!company) {
            return res.status(404).json({
                message: "Company not found.",
                success: false
            })
        }
        return res.status(200).json({
            message:"Company information updated.",
            success:true
        })

    } catch (error) {
        console.log(error);
    }
}