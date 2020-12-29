const defaultState = {
      name: "雷春华",
      birthday: "1990-01-06",
      sex: "man",
      education_background: "大专",
      education_endtime: "20120701",
      work_start_date: '2012-08-18',
      current_status: "离职-随时到岗",
      contact_number: "17896057893",
      email: "617054896@qq.com",
};
export default (state = defaultState,action)=>{
    // switch action.type :
    //     case "changeName":()=>{

    //     }
    if(action.type === 'contact_number'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.contact_number = action.value
        return newState;
    }
    // console.log(state,action)
    return state;
}