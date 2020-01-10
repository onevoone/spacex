export interface DragonTypes {
  dragon: {
    id: string;
    crew_capacity: number;
    description: string;
    diameter: {
      meters: number;
      feet: number;
    };
    dry_mass_kg: number;
    dry_mass_lb: number;
    first_flight: string;
    heat_shield: {
      material: string;
      dev_partner: string;
      size_meters: number;
      temp_degrees: number;
    };
    height_w_trunk: {
      meters: number;
      feet: number;
    };
    launch_payload_mass: {
      kg: number;
      lb: number;
    };
    name: string;
    return_payload_mass: {
      kg: number;
      lb: number;
    };
    wikipedia: string;
  };
}
