export interface Mission {
  flight: string;
  name: string;
}

export interface Ship {
  id: string;
  image: string | null;
  home_port: string | null;
  name: string;
  type: string;
}

export interface ShipsData {
  ships: Ship[]
}

export interface ShipDetails {
  ship: {
    id: string;
    name: string;
    model: string;
    position: {
      latitude: number | null;
      longitude: number | null;
    };
    image: string | null;
    status: string | null;
    successful_landings: number;
    type: string;
    url: string | null;
    weight_lbs: number | null;
    year_built: number | null;
    weight_kg: number | null;
    speed_kn: number | null;
    roles: string[];
    missions: Mission[];
    imo: string | null;
    mmsi: string | null;
    home_port: string | null;
    course_deg: string | null;
    class: string | null;
    attempted_landings: number | null;
    active: boolean;
    abs: string | null;
  };
}

export interface ShipDetailsVars {
  id: string | undefined;
}