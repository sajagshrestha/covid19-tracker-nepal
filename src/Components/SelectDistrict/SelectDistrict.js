import React from 'react';
import {CustomSelect} from "./SelectDistrict.styles";
const districtOptions = [
  { value: "Bhojpur", label: "Bhojpur" },
  { value: "Dhankuta", label: "Dhankuta" },
  { value: "Ilam", label: "Ilam" },
  { value: "Jhapa", label: "Jhapa" },
  { value: "Khotang", label: "Khotang" },
  { value: "Morang", label: "Morang" },
  { value: "Okhaldhunga", label: "Okhaldhunga" },
  { value: "Panchthar", label: "Panchthar" },
  { value: "Sankhuwasabha", label: "Sankhuwasabha" },
  { value: "Solukhumbu", label: "Solukhumbu" },
  { value: "Sunsari", label: "Sunsari" },
  { value: "Taplejung", label: "Taplejung" },
  { value: "Terhathum", label: "Terhathum" },
  { value: "Udayapur", label: "Udayapur" },
  { value: "Bara", label: "Bara" },
  { value: "Parsa", label: "Parsa" },
  { value: "Dhanusha", label: "Dhanusha" },
  { value: "Mahottari", label: "Mahottari" },
  { value: "Rautahat", label: "Rautahat" },
  { value: "Saptari", label: "Saptari" },
  { value: "Sarlahi", label: "Sarlahi" },
  { value: "Siraha", label: "Siraha" },
  { value: "Bhaktapur", label: "Bhaktapur" },
  { value: "Chitwan", label: "Chitwan" },
  { value: "Dhading", label: "Dhading" },
  { value: "Dolakha", label: "Dolakha" },
  { value: "Kathmandu", label: "Kathmandu" },
  { value: "Kavrepalanchok", label: "Kavrepalanchok" },
  { value: "Lalitpur", label: "Lalitpur" },
  { value: "Makwanpur", label: "Makwanpur" },
  { value: "Nuwakot", label: "Nuwakot" },
  { value: "Ramechhap", label: "Ramechhap" },
  { value: "Rasuwa", label: "Rasuwa" },
  { value: "Sindhuli", label: "Sindhuli" },
  { value: "Sindhupalchok", label: "Sindhupalchok" },
  { value: "Baglung", label: "Baglung" },
  { value: "Gorkha", label: "Gorkha" },
  { value: "Kaski", label: "Kaski" },
  { value: "Lamjung", label: "Lamjung" },
  { value: "Manang", label: "Manang" },
  { value: "Mustang", label: "Mustang" },
  { value: "Myagdi", label: "Myagdi" },
  { value: "Nawalpur", label: "Nawalpur" },
  { value: "Parbat", label: "Parbat" },
  { value: "Syangja", label: "Syangja" },
  { value: "Tanahun", label: "Tanahun" },
  { value: "Arghakhanchi", label: "Arghakhanchi" },
  { value: "Banke", label: "Banke" },
  { value: "Bardiya", label: "Bardiya" },
  { value: "Dang", label: "Dang" },
  { value: "Eastern Rukum", label: "Eastern Rukum" },
  { value: "Gulmi", label: "Gulmi" },
  { value: "Kapilavastu", label: "Kapilavastu" },
  { value: "Parasi", label: "Parasi" },
  { value: "Palpa", label: "Palpa" },
  { value: "Pyuthan", label: "Pyuthan" },
  { value: "Rolpa", label: "Rolpa" },
  { value: "Rupandehi", label: "Rupandehi" },
  { value: "Dailekh", label: "Dailekh" },
  { value: "Dolpa", label: "Dolpa" },
  { value: "Humla", label: "Humla" },
  { value: "Jajarkot", label: "Jajarkot" },
  { value: "Jumla", label: "Jumla" },
  { value: "Kalikot", label: "Kalikot" },
  { value: "Mugu", label: "Mugu" },
  { value: "Salyan", label: "Salyan" },
  { value: "Surkhet", label: "Surkhet" },
  { value: "Western Rukum", label: "Western Rukum" },
  { value: "Achham", label: "Achham" },
  { value: "Baitadi", label: "Baitadi" },
  { value: "Bajhang", label: "Bajhang" },
  { value: "Bajura", label: "Bajura" },
  { value: "Dadeldhura", label: "Dadeldhura" },
  { value: "Darchula", label: "Darchula" },
  { value: "Doti", label: "Doti" },
  { value: "Kailali", label: "Kailali" },
  { value: "Kanchanpur", label: "Kanchanpur" }
];

const SelectDistrict = () =>{
    return(
        <CustomSelect
            classNamePrefix={'Select'}
            options={districtOptions}
           
            isSearchable
            placeholder="Select a district"
        />
    )
}
export default SelectDistrict;