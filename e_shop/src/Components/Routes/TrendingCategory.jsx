
function TrendingCategory() {
    return (
        <>
            <div>
                <img src="banner.jpg" alt="img" />
                <button style={{ backgroundImage: `url(	https://content1.geekbuying.com/V1.4/en/images/indexV7/christmas_title_bg.png)`, height: "80px", width: "390px", color: "white", fontWeight: "bold", paddingTop: "5px" }}
                >Trending Category</button>
            </div>
            <div style={{ display: "flex", width: "85%", margin: "auto", justifyContent: "space-evenly", gap: "20px", color: "teal", fontFamily: "sans-serif", marginTop: "20px" }}>
                <div>
                    <img src="https://img.gkbcdn.com/bn/2205/488x2743-628f62882b40c91f8cd36998._p1_.jpg" alt="img" />
                    <h2 style={{ fontWeight: "bolder" }}>Smart House and Garden</h2>
                    <p>Smart cleaning robots and vacuums, living room furniture, patio and garden supplies, up to 60% off</p>

                </div>
                <div>
                    <img src="https://img.gkbcdn.com/bn/2212/488x274-63998a412b40c92ac0082d77._p1_.jpg" alt="img" />
                    <h2 style={{ fontWeight: "bolder" }}>
                        E-Transport
                    </h2>
                    <p>New e-riders for less, skip gas prices with electric bikes, scooters and beyond.</p>
                </div>
                <div>
                    <img src="https://img.gkbcdn.com/bn/2205/3d488x274-62958bbe2b40c9241c538d77._p1_.jpg" alt="img" />
                    <h2 style={{ fontWeight: "bolder" }}>
                        3D Printers
                    </h2>
                    <p>3D Printers allow you to brings digitally modeled designed to life by using highly detailed filament printing.</p>
                </div>
            </div>
        </>
    )
}

export default TrendingCategory;