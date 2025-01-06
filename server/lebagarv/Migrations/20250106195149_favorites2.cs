using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace lebagarv.Migrations
{
    /// <inheritdoc />
    public partial class favorites2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ProductId",
                table: "Favorites",
                newName: "CarId");

            migrationBuilder.CreateIndex(
                name: "IX_Favorites_CarId",
                table: "Favorites",
                column: "CarId");

            migrationBuilder.AddForeignKey(
                name: "FK_Favorites_Cars_CarId",
                table: "Favorites",
                column: "CarId",
                principalTable: "Cars",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Favorites_Cars_CarId",
                table: "Favorites");

            migrationBuilder.DropIndex(
                name: "IX_Favorites_CarId",
                table: "Favorites");

            migrationBuilder.RenameColumn(
                name: "CarId",
                table: "Favorites",
                newName: "ProductId");
        }
    }
}
