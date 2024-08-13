import axios from "axios";
import crypto from "crypto";
import { Volunteer } from "../models/volunteer.js";

//Base Url
const cryptomus = axios.create({baseURL: ""})