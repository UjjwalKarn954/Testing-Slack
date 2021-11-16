"use strict";
// https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths.html
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
exports.DataAwsServicecatalogLaunchPaths = exports.DataAwsServicecatalogLaunchPathsSummaries = exports.DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries = void 0;
var cdktf = require("cdktf");
var DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries = /** @class */ (function (_super) {
    __extends(DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries, _super);
    function DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries;
}(cdktf.ComplexComputedList));
exports.DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries = DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries;
var DataAwsServicecatalogLaunchPathsSummaries = /** @class */ (function (_super) {
    __extends(DataAwsServicecatalogLaunchPathsSummaries, _super);
    function DataAwsServicecatalogLaunchPathsSummaries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsServicecatalogLaunchPathsSummaries.prototype, "constraintSummaries", {
        // constraint_summaries - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('constraint_summaries');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogLaunchPathsSummaries.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogLaunchPathsSummaries.prototype, "pathId", {
        // path_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogLaunchPathsSummaries.prototype, "tags", {
        // tags - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsServicecatalogLaunchPathsSummaries;
}(cdktf.ComplexComputedList));
exports.DataAwsServicecatalogLaunchPathsSummaries = DataAwsServicecatalogLaunchPathsSummaries;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths.html aws_servicecatalog_launch_paths}
*/
var DataAwsServicecatalogLaunchPaths = /** @class */ (function (_super) {
    __extends(DataAwsServicecatalogLaunchPaths, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths.html aws_servicecatalog_launch_paths} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServicecatalogLaunchPathsConfig
    */
    function DataAwsServicecatalogLaunchPaths(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_servicecatalog_launch_paths',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._acceptLanguage = config.acceptLanguage;
        _this._productId = config.productId;
        return _this;
    }
    Object.defineProperty(DataAwsServicecatalogLaunchPaths.prototype, "acceptLanguage", {
        get: function () {
            return this.getStringAttribute('accept_language');
        },
        set: function (value) {
            this._acceptLanguage = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsServicecatalogLaunchPaths.prototype.resetAcceptLanguage = function () {
        this._acceptLanguage = undefined;
    };
    Object.defineProperty(DataAwsServicecatalogLaunchPaths.prototype, "acceptLanguageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._acceptLanguage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogLaunchPaths.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogLaunchPaths.prototype, "productId", {
        get: function () {
            return this.getStringAttribute('product_id');
        },
        set: function (value) {
            this._productId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogLaunchPaths.prototype, "productIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._productId;
        },
        enumerable: false,
        configurable: true
    });
    // summaries - computed: true, optional: false, required: false
    DataAwsServicecatalogLaunchPaths.prototype.summaries = function (index) {
        return new DataAwsServicecatalogLaunchPathsSummaries(this, 'summaries', index);
    };
    // =========
    // SYNTHESIS
    // =========
    DataAwsServicecatalogLaunchPaths.prototype.synthesizeAttributes = function () {
        return {
            accept_language: cdktf.stringToTerraform(this._acceptLanguage),
            product_id: cdktf.stringToTerraform(this._productId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsServicecatalogLaunchPaths.tfResourceType = "aws_servicecatalog_launch_paths";
    return DataAwsServicecatalogLaunchPaths;
}(cdktf.TerraformDataSource));
exports.DataAwsServicecatalogLaunchPaths = DataAwsServicecatalogLaunchPaths;
