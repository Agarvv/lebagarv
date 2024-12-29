using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace lebagarv.Migrations
{
    /// <inheritdoc />
    public partial class Initia : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cars_CarBrands_CarBrandId",
                table: "Cars");

            migrationBuilder.DropUniqueConstraint(
                name: "AK_CarBrands_TempId",
                table: "CarBrands");

            migrationBuilder.DropColumn(
                name: "TempId",
                table: "CarBrands");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CarBrands",
                table: "CarBrands",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Cars_CarBrands_CarBrandId",
                table: "Cars",
                column: "CarBrandId",
                principalTable: "CarBrands",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cars_CarBrands_CarBrandId",
                table: "Cars");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CarBrands",
                table: "CarBrands");

            migrationBuilder.AddColumn<int>(
                name: "TempId",
                table: "CarBrands",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddUniqueConstraint(
                name: "AK_CarBrands_TempId",
                table: "CarBrands",
                column: "TempId");

            migrationBuilder.AddForeignKey(
                name: "FK_Cars_CarBrands_CarBrandId",
                table: "Cars",
                column: "CarBrandId",
                principalTable: "CarBrands",
                principalColumn: "TempId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
