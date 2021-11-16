"use strict";
// https://www.terraform.io/docs/providers/aws/r/cur_report_definition.html
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.CurReportDefinition = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition.html aws_cur_report_definition}
*/
var CurReportDefinition = /** @class */ (function (_super) {
    __extends(CurReportDefinition, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition.html aws_cur_report_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CurReportDefinitionConfig
    */
    function CurReportDefinition(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cur_report_definition',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._additionalArtifacts = config.additionalArtifacts;
        _this._additionalSchemaElements = config.additionalSchemaElements;
        _this._compression = config.compression;
        _this._format = config.format;
        _this._refreshClosedReports = config.refreshClosedReports;
        _this._reportName = config.reportName;
        _this._reportVersioning = config.reportVersioning;
        _this._s3Bucket = config.s3Bucket;
        _this._s3Prefix = config.s3Prefix;
        _this._s3Region = config.s3Region;
        _this._timeUnit = config.timeUnit;
        return _this;
    }
    Object.defineProperty(CurReportDefinition.prototype, "additionalArtifacts", {
        get: function () {
            return this.getListAttribute('additional_artifacts');
        },
        set: function (value) {
            this._additionalArtifacts = value;
        },
        enumerable: false,
        configurable: true
    });
    CurReportDefinition.prototype.resetAdditionalArtifacts = function () {
        this._additionalArtifacts = undefined;
    };
    Object.defineProperty(CurReportDefinition.prototype, "additionalArtifactsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._additionalArtifacts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CurReportDefinition.prototype, "additionalSchemaElements", {
        get: function () {
            return this.getListAttribute('additional_schema_elements');
        },
        set: function (value) {
            this._additionalSchemaElements = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CurReportDefinition.prototype, "additionalSchemaElementsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._additionalSchemaElements;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CurReportDefinition.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CurReportDefinition.prototype, "compression", {
        get: function () {
            return this.getStringAttribute('compression');
        },
        set: function (value) {
            this._compression = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CurReportDefinition.prototype, "compressionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._compression;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CurReportDefinition.prototype, "format", {
        get: function () {
            return this.getStringAttribute('format');
        },
        set: function (value) {
            this._format = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CurReportDefinition.prototype, "formatInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._format;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CurReportDefinition.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CurReportDefinition.prototype, "refreshClosedReports", {
        get: function () {
            return this.getBooleanAttribute('refresh_closed_reports');
        },
        set: function (value) {
            this._refreshClosedReports = value;
        },
        enumerable: false,
        configurable: true
    });
    CurReportDefinition.prototype.resetRefreshClosedReports = function () {
        this._refreshClosedReports = undefined;
    };
    Object.defineProperty(CurReportDefinition.prototype, "refreshClosedReportsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._refreshClosedReports;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CurReportDefinition.prototype, "reportName", {
        get: function () {
            return this.getStringAttribute('report_name');
        },
        set: function (value) {
            this._reportName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CurReportDefinition.prototype, "reportNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._reportName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CurReportDefinition.prototype, "reportVersioning", {
        get: function () {
            return this.getStringAttribute('report_versioning');
        },
        set: function (value) {
            this._reportVersioning = value;
        },
        enumerable: false,
        configurable: true
    });
    CurReportDefinition.prototype.resetReportVersioning = function () {
        this._reportVersioning = undefined;
    };
    Object.defineProperty(CurReportDefinition.prototype, "reportVersioningInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._reportVersioning;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CurReportDefinition.prototype, "s3Bucket", {
        get: function () {
            return this.getStringAttribute('s3_bucket');
        },
        set: function (value) {
            this._s3Bucket = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CurReportDefinition.prototype, "s3BucketInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._s3Bucket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CurReportDefinition.prototype, "s3Prefix", {
        get: function () {
            return this.getStringAttribute('s3_prefix');
        },
        set: function (value) {
            this._s3Prefix = value;
        },
        enumerable: false,
        configurable: true
    });
    CurReportDefinition.prototype.resetS3Prefix = function () {
        this._s3Prefix = undefined;
    };
    Object.defineProperty(CurReportDefinition.prototype, "s3PrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._s3Prefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CurReportDefinition.prototype, "s3Region", {
        get: function () {
            return this.getStringAttribute('s3_region');
        },
        set: function (value) {
            this._s3Region = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CurReportDefinition.prototype, "s3RegionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._s3Region;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CurReportDefinition.prototype, "timeUnit", {
        get: function () {
            return this.getStringAttribute('time_unit');
        },
        set: function (value) {
            this._timeUnit = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CurReportDefinition.prototype, "timeUnitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeUnit;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CurReportDefinition.prototype.synthesizeAttributes = function () {
        return {
            additional_artifacts: cdktf.listMapper(cdktf.stringToTerraform)(this._additionalArtifacts),
            additional_schema_elements: cdktf.listMapper(cdktf.stringToTerraform)(this._additionalSchemaElements),
            compression: cdktf.stringToTerraform(this._compression),
            format: cdktf.stringToTerraform(this._format),
            refresh_closed_reports: cdktf.booleanToTerraform(this._refreshClosedReports),
            report_name: cdktf.stringToTerraform(this._reportName),
            report_versioning: cdktf.stringToTerraform(this._reportVersioning),
            s3_bucket: cdktf.stringToTerraform(this._s3Bucket),
            s3_prefix: cdktf.stringToTerraform(this._s3Prefix),
            s3_region: cdktf.stringToTerraform(this._s3Region),
            time_unit: cdktf.stringToTerraform(this._timeUnit)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CurReportDefinition.tfResourceType = "aws_cur_report_definition";
    return CurReportDefinition;
}(cdktf.TerraformResource));
exports.CurReportDefinition = CurReportDefinition;
