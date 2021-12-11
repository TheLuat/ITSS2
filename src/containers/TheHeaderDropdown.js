import React from "react";
import { useContext } from "react";
import { AuthContext } from "src/contexts/AuthContexts";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const TheHeaderDropdown = () => {
  const { logout } = useContext(AuthContext);
  const logOutUser = () => {
    logout();
  };
  return (
    <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={"avatars/6.jpg"}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem onClick={() => logOutUser()}>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          Log out
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default TheHeaderDropdown;
