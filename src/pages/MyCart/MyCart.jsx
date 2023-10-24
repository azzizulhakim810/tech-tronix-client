import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import EmailBasedProducts from "../../components/EmailBasedProducts/EmailBasedProducts";

const MyCart = () => {

  const {user} = useContext(AuthContext);
  const getUser = user.email;

  const emailBasedProducts = useLoaderData();
  // console.log(emailBasedProducts, getUser);

  const [loggedUser, setLoggedUser] = useState(emailBasedProducts);

  useEffect(() => {
    const filtered = emailBasedProducts?.filter(p => 
      p.userEmail == getUser
    )
    setLoggedUser(filtered);

  }, [emailBasedProducts, getUser])

  // console.log(loggedUser);
  return (
    <div className="relative grid grid-cols-2 gap-10 w-8/12 mx-auto py-10 pb-20">
      {
        loggedUser?.map(specificFilteredProduct => <EmailBasedProducts  key={specificFilteredProduct._id}  specificFilteredProduct = {specificFilteredProduct}>

          </EmailBasedProducts>
        )
      }
    </div>
  );
};

export default MyCart;