"use strict";
// https://www.terraform.io/docs/providers/aws/d/cur_report_definition.html
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
exports.DataAwsCurReportDefinition = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cur_report_definition.html aws_cur_report_definition}
*/
var DataAwsCurReportDefinition = /** @class */ (function (_super) {
    __extends(DataAwsCurReportDefinition, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cur_report_definition.html aws_cur_report_definition} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCurReportDefinitionConfig
    */
    function DataAwsCurReportDefinition(scope, id, config) {
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
        _this._reportName = config.reportName;
        return _this;
    }
    Object.defineProperty(DataAwsCurReportDefinition.prototype, "additionalArtifacts", {
        // ==========
        // ATTRIBUTES
        // ==========
        // additional_artifacts - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('additional_artifacts');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCurReportDefinition.prototype, "additionalSchemaElements", {
        // additional_schema_elements - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('additional_schema_elements');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCurReportDefinition.prototype, "compression", {
        // compression - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('compression');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCurReportDefinition.prototype, "format", {
        // format - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('format');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCurReportDefinition.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCurReportDefinition.prototype, "refreshClosedReports", {
        // refresh_closed_reports - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('refresh_closed_reports');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCurReportDefinition.prototype, "reportName", {
        get: function () {
            return this.getStringAttribute('report_name');
        },
        set: function (value) {
            this._reportName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCurReportDefinition.prototype, "reportNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._reportName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCurReportDefinition.prototype, "reportVersioning", {
        // report_versioning - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('report_versioning');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCurReportDefinition.prototype, "s3Bucket", {
        // s3_bucket - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('s3_bucket');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCurReportDefinition.prototype, "s3Prefix", {
        // s3_prefix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('s3_prefix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCurReportDefinition.prototype, "s3Region", {
        // s3_region - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('s3_region');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCurReportDefinition.prototype, "timeUnit", {
        // time_unit - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('time_unit');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsCurReportDefinition.prototype.synthesizeAttributes = function () {
        return {
            report_name: cdktf.stringToTerraform(this._reportName)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsCurReportDefinition.tfResourceType = "aws_cur_report_definition";
    return DataAwsCurReportDefinition;
}(cdktf.TerraformDataSource));
exports.DataAwsCurReportDefinition = DataAwsCurReportDefinition;
