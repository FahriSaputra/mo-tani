import { useNavigate } from "react-router";
import { PrimaryButton } from "../components";
import MainLayout from "../layout/MainLayout";

const DUMMY_SPEK = [
  "Nama prototipe : Mesin penanam tebu dan pemasang dripline terintegrasi",
  "Pola tanam tebu : Doubel row",
  "Posisi dripline : Diantara row",
  "Kedalaman dripline :  Tertanam (subsurface) 5 cm di bawah bibit tebu",
  "Diameter dripline : 16 mm",
  "Jarak lobang dripline : 50 cm",
  "Panjang dripline/ roll : 1250 m",
  "Jarak PKP tebu : 180 cm",
  "Jarak antar lajur : 40 cm",
  "Bentuk bibit : Lonjoran (wholestalk)",
  "Panjang potongan bibit : 30 – 40 cm",
  "Tipe pengumpanan bibit : Vertical",
  "Kapasitas angkut bibit : 900- 1100 kg",
  "Kapasitas tangki pupuk : 80 kg",
  "Kapasitas kerja : 2,0 ha/hari",
  "Dimensi (P x L x T ) : 1870 x 2300 x 2100 mm",
  "Berat kosong mesin : 600 kg",
  "Traktor Penggerak : Traktor roda 4 (minimal 90 Hp)",
];

const ProductDetail = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="px-3 mt-3">
        <div className="flex flex-col md:flex-row">
          <img
            className="w-full md:w-1/2"
            src="https://www.yanmar.com/ltc/id/agri/img/8b2fe22490/img_index_01.jpg"
            alt="traktor"
          />
          <div>
            <h1 className="text-2xl font-bold mt-3 md-mt-0">
              Mesin Penanam Tebu Pemasang Dripline Terintegrasi
            </h1>

            <h3 className="mt-3">Rp. 250.000</h3>
            <p className="mt-2">Komoditi: Tebu</p>
            <p className="mt-2">Tahun: 2018</p>
            <p className="mt-2">Sisa: 20</p>

            <div className="mt-3 md:w-1/2">
              <PrimaryButton title="Rent" onClick={() => navigate("/cart")} />
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-lg mt-5">Detail</h2>
          <h4 className="font-semibold mt-2 mb-2">Spesifikasi</h4>
          <ul>
            {DUMMY_SPEK.map((spek, i) => (
              <li className="flex">
                <p className="font-bold mr-2">{i + 1}. </p> {spek}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-rows-2 mt-5">
          <div>
            <h4 className="mb-3 font-semibold">Kegunaan:</h4>
            <p>
              Mesin penanam tebu dan pemasang dripline terintegrasi ini dapat
              digunakan untuk menanam tebu secara mekanis sekaligus memasang
              dripline untuk irigasi subsurface dalam satu proses pengoperasian.
              Mesin ini digerakkan traktor roda 4.
            </p>
          </div>

          <div className="mt-3">
            <h4 className="mb-3 font-semibold">Keunggulan:</h4>
            <p>
              menanam tebu secara mekanis sekaligus memasang dripline untuk
              irigasi subsurface dalam satu proses pengoperasian. Mesin ini
              digerakkan traktor roda 4
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetail;
