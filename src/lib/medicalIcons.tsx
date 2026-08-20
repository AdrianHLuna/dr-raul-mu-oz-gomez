import {
  FaBone,
  FaXRay,
  FaUserInjured,
  FaSyringe,
  FaProcedures,
  FaWalking,
  FaRunning,
  FaDumbbell,
  FaWheelchair,
  FaCrutch,
  FaStethoscope,
  FaHeartbeat,
  FaShieldAlt,
  FaSearchPlus,
  FaLayerGroup,
  FaHandHoldingMedical,
  FaNotesMedical,
  FaExclamationTriangle,
  FaCogs,
  FaAmbulance,
} from "react-icons/fa";
import type { IconType } from "react-icons";

const serviceIcons: Record<string, IconType> = {
  "artroscopia-de-rodilla": FaSearchPlus,
  "artroscopia-de-hombro": FaSearchPlus,
  "protesis-de-rodilla": FaCogs,
  "protesis-de-cadera": FaCogs,
  "cirugia-endoscopica-biportal-lumbar": FaLayerGroup,
  "osteosintesis-y-fijacion-de-fracturas": FaBone,
  "liberacion-quirurgica-del-tunel-del-carpo": FaHandHoldingMedical,
  "artroscopia-de-tobillo": FaSearchPlus,
  "infiltracion-y-viscosuplementacion-articular": FaSyringe,
  "artroscopia-y-lesiones-deportivas": FaRunning,
};

const diseaseIcons: Record<string, IconType> = {
  "lesiones-de-ligamentos-de-la-rodilla": FaUserInjured,
  "lesiones-de-los-meniscos-de-la-rodilla": FaBone,
  "rotura-de-tendones-del-manguito-rotador": FaExclamationTriangle,
  "desgaste-de-articulaciones-rodilla-y-cadera": FaWalking,
  "inestabilidad-de-las-articulaciones": FaShieldAlt,
  "sindrome-del-tunel-del-carpo": FaHandHoldingMedical,
  "lesiones-de-la-articulacion-del-tobillo": FaCrutch,
  "dolor-de-hombro": FaHeartbeat,
  "dolor-de-rodilla": FaHeartbeat,
  "fracturas-oseas-y-traumatismos": FaAmbulance,
  "lesiones-deportivas": FaDumbbell,
  "pinzamiento-femoroacetabular-y-hernia-discal": FaLayerGroup,
};

const symptomIcons: Record<string, IconType> = {
  "dolor-articular": FaHeartbeat,
  "dolor-del-nervio-ciatico": FaExclamationTriangle,
  "inestabilidad-o-falseo-articular": FaShieldAlt,
  "chasquido-y-crepitacion-articular": FaXRay,
  "rigidez-y-limitacion-articular": FaWheelchair,
  "adormecimiento-y-hormigueo-en-manos": FaHandHoldingMedical,
  "inflamacion-y-derrame-articular": FaSyringe,
  "dolor-nocturno-de-hombro": FaProcedures,
  "incapacidad-para-caminar-o-apoyar": FaCrutch,
  "deformidad-visible-por-traumatismo": FaUserInjured,
};

export function getServiceIcon(id: string): IconType {
  return serviceIcons[id] ?? FaBone;
}

export function getDiseaseIcon(id: string): IconType {
  return diseaseIcons[id] ?? FaExclamationTriangle;
}

export function getSymptomIcon(id: string): IconType {
  return symptomIcons[id] ?? FaStethoscope;
}

export { FaNotesMedical, FaStethoscope, FaXRay };
