import AddUser from "../pages/Dashboard/AddUser";
import ManageUsers from "../pages/Dashboard/ManageUsers";

export const nestedRoutes = [
    { path: 'manage-users', name: 'ManageUsers', Component: ManageUsers },
    { name: 'ManageUsers', Component: ManageUsers },
    { path: 'add-user', name: 'AddUser', Component: AddUser }
]